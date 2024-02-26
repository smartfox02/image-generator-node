require('dotenv').config()
const axios = require('axios')
const { pickRandom } = require('../configs/pickRandom')
const crypto = require('crypto')
const { ComfyUIClient } = require('comfy-ui-client');
// import { Prompt } from 'comfy-ui-client';

serverAddress = process.env.COMFYUI_URL

let comfyuiClient

comfyuiClient = axios.create({
    baseURL: serverAddress,
})

function rand32bitInt() {
    const buffer = crypto.randomBytes(4);
    return buffer.readUInt32BE();
}

async function executeInitialImagePrompt(positive_prompt, negative_prompt, img_name) {
    console.log("positive_prompt:", JSON.stringify(positive_prompt));
    console.log("negative_prompt:", JSON.stringify(negative_prompt));
    console.log("img_name:", img_name);
    const prompt = {
        '3': {
            class_type: 'KSampler',
            inputs: {
                cfg: 8,
                denoise: 1,
                latent_image: ['5', 0],
                model: ['4', 0],
                negative: ['7', 0],
                positive: ['6', 0],
                sampler_name: 'euler',
                scheduler: 'normal',
                seed: 8566257,
                steps: 20,
            },
        },
        '4': {
            class_type: 'CheckpointLoaderSimple',
            inputs: {
                ckpt_name: 'juggernautXL.safetensors',
            },
        },
        '5': {
            class_type: 'EmptyLatentImage',
            inputs: {
                batch_size: 1,
                height: 1000,
                width: 900,
            },
        },
        '6': {
            class_type: 'CLIPTextEncode',
            inputs: {
                clip: ['4', 1],
                text: 'masterpiece best quality girl',
            },
        },
        '7': {
            class_type: 'CLIPTextEncode',
            inputs: {
                clip: ['4', 1],
                text: 'bad hands',
            },
        },
        '8': {
            class_type: 'VAEDecode',
            inputs: {
                samples: ['3', 0],
                vae: ['4', 2],
            },
        },
        '9': {
            class_type: 'LoadImage',
            inputs: {
                image: 'IMG_1223.JPG',
            },
        },
        '10': {
            class_type: 'ReActorFaceSwap',
            inputs: {
                input_image: ['8', 0],
                source_image: ['9', 0],
                enabled: true,
                swap_model: "roopswapper.onnx",
                facedetection: "retinaface_resnet50",
                face_restore_model: "none",
                face_restore_visibility: 1.0,
                face_restore_vusuvukuty: 1.00,
                codeformer_weight: 0.5,
                detect_gender_input: "no",
                detect_gender_source: "no",
                input_faces_index: 0,
                source_faces_index: 0,
                console_log_level: 1,
            },
        },
        '11': {
            class_type: 'SaveImage',
            inputs: {
                filename_prefix: 'ComfyUI',
                images: ['10', 0],
            },
        },
    };

    // Set the text prompt for our positive CLIPTextEncode
    prompt['6'].inputs.text = positive_prompt;
    prompt['7'].inputs.text = negative_prompt;
    // Set the seed for our KSampler node
    prompt['3'].inputs.seed = 5;
    prompt['9'].inputs.image = img_name;
    // Create client
    const serverAddress = process.env.COMFYUI_URL;
    const clientId = 'baadbabe-b00b-4206-9420-deadd00d1337';
    const client = new ComfyUIClient(serverAddress, clientId);

    // Connect to server
    await client.connect();

    // Generate images
    const images = await client.getImages(prompt);

    // Save images to file
    const outputDir = './uploads/output';
    let image_name = images[Object.keys(images)[0]][0]?.image?.filename
    await client.saveImages(images, outputDir);
    await client.disconnect();
    return image_name
}

module.exports = {
    executeInitialImagePrompt,
}