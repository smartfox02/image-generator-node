const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const db = require('../db')
const axios = require('axios')
const comfyui = require('./comfyui')

exports.modelsList = async (req, res) => {
  console.log("-------------admin page----------------")
  try {
    const models = await db.models.findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })
    return res.json({
      models
    }) 
  } catch (err) {
    console.log("------------models list error:", err)
    return res.status(500).send({
      message: {error: 'Please try again later'}
    })
  }
}

exports.brandsList = async (req, res) => {
  try{
    const brands = await db.brands.findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })
    return res.json({
      brands
    })
  } catch(err){
    return res.status(500).send({
      message: {error: 'Please try again'}
    })
  }
}

exports.aestheticsList = async (req, res) => {
  try{
    const aesthetics = await db.aesthetics.findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })
    return res.json({
      aesthetics
    })
  }catch(err) {
    return res.status(500).send({
      message: {error: 'Please try again later'}
    })
  }
}

exports.clothingList = async (req, res) => {
  console.log("-------clothing list")
  try{
    const clothing = await db.clothing.findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })
    return res.json({
      clothing
    })
  }catch(err) {
    return res.status(500).send({
      message: {error: 'Please try again later'}
    })
  }
}

exports.imageGenerate = async (req, res) => {
  const { prompt, img_name } = req.body;
  // console.log("image_generate:", JSON.stringify(prompt))
  const positive_prompt = prompt.join(' ');
  const negative_prompt = "((black and white)),, ((monochrome)), ((border)) out of frame, two heads, totem pole, several faces, extra fingers, mutated hands, extra hands, extra feet, (poorly drawn hands:1.21), (poorly drawn face:1.21), (mutation:1.331), (deformed:1.331), (ugly: 1.21), blurry, (bad anatomy:1.21), (bad proportions:1.331), (extra limbs:1.21), cloned face, (anime:1.331), (skinny: 1.331), glitchy, saturated colors, distorted fingers, oversaturation, (penis:1.3), 3d, cartoon, low-res, text, error, cropped, worst quality, low quality, jpeg artifacts, duplicate, morbid, mutilated, out of frame ,extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, image compression, compression, noise, closeup, flat, cartoon, 3d, (disfigured), (bad art), (deformed), (poorly drawn), (extra limbs), (close up),strange colors, blurry, boring, sketch, lackluster, cartoon, 3d, (disfigured), (bad art), (deformed), (poorly drawn), (extra limbs), (close up), strange colors, blurry, boring, sketch, lackluster, High pass filter,, (lout of focus body)), ((out of focus face)), (((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, (poorly drawn hands)), (poorly drawn face)), ((mutation))), ((deformed) |), ((ugly)), blurry, ((bad anatomy)), (((bad proportions) |), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), ((missing feet))), ((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), ((long neck))), ugly, man, (headshot:1.3), child, (closeup:1.3), fat, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, (deformed body:1.3)"

  const image = await comfyui.executeInitialImagePrompt(positive_prompt, negative_prompt, img_name)
  console.log("======image:", image)
  return res.json({
    image
  })
}

exports.updateHomeSetting = async (req, res) => {
  try {
    const { key, value } = req.body;
    const homeSetting = await db.homeSetting.findOne({})
    await homeSetting.update({
      [key]: value
    })
    return res.json({
      message: { success: 'Updated successfully' }
    })
  } catch (err) {
    return res.status(500).send({
      message: { error: 'Please try again later' }
    })
  }
}
