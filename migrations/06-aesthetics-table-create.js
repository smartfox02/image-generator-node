const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid')

const migrationCommands = function (transaction) {
  return [{
    fn: "createTable",
    params: [
      "aesthetics",
      {
        "id": {
          "type": Sequelize.UUID,
          "field": "id",
          "primaryKey": true,
          "defaultValue": Sequelize.UUIDV4
        },
        "name": {
          "type": Sequelize.TEXT,
          "allowNull": true
        },
        "attribute": {
          "type": Sequelize.TEXT,
          "allowNull": true,
        },
        "img": {
          "type": Sequelize.STRING,
          "allowNull": true,
        },
        "createdAt": {
          "type": Sequelize.DATE,
          "field": "createdAt",
          "allowNull": false,
          "defaultValue": Sequelize.NOW
        },
        "updatedAt": {
          "type": Sequelize.DATE,
          "field": "updatedAt",
          "allowNull": false
        }
      },
      {
        "transaction": transaction
      }
    ]
  },
  ];
};
const rollbackCommands = function (transaction) {
  return [{
    fn: "dropTable",
    params: ["aesthetics", {
      transaction: transaction
    }]
  }
  ];
};

module.exports = {
  pos: 0,
  useTransaction: true,
  execute: function (queryInterface, Sequelize, _commands) {
    let index = this.pos;
    function run(transaction) {
      const commands = _commands(transaction);
      return new Promise(function (resolve, reject) {
        function next() {
          if (index < commands.length) {
            let command = commands[index];
            console.log("[#" + index + "] execute: " + command.fn);
            index++;
            queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
          }
          else
            resolve();
        }
        next();
      });
    }
    if (this.useTransaction) {
      return queryInterface.sequelize.transaction(run);
    } else {
      return run(null);
    }
  },
  up: async function (queryInterface, Sequelize) {
    await this.execute(queryInterface, Sequelize, migrationCommands);
    await queryInterface.bulkInsert('aesthetics', [
      {
        id: uuidv4(),
        name: `Abandoned Ruins`,
        attribute:  "Abandoned Ruins - the environment is abandoned ruins, The textured, weathered surfaces of ancient or industrial ruins, conveying a sense of history and decay.",
        img: "IMG_1121.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Black and White`,
        attribute: "Black and White - A high-fashion model in an elegant pose, captured in sharp black and white, highlighting dramatic contrast and intricate textures.",
        img: "IMG_1122.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Bokeh`,
        attribute: "Bokeh - Utilizing shallow depth of field to create blurred backgrounds, emphasizing the subject with a dreamy quality.",
        img: "IMG_1123.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Studio`,
        attribute: "Studio - the environment is a photographer white studio background environment in a photographer loft studio, in a oak flooring loft style studio",
        img: "IMG_1124.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Cinematic`,
        attribute: "Cinematic - A cinematic fashion scene with a model styled in a narrative setting, using widescreen aspect ratio and color grading reminiscent of film.",
        img: "IMG_1125.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Cross-Processing`,
        attribute: "Cross-Processing - A fashion photograph with surreal colors and contrasts achieved through cross-processing, giving it an unconventional and edgy look.",
        img: "IMG_1126.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Urban Graffiti`,
        attribute: "Urban Graffiti - the environment is urban graffiti, Colorful and expressive street art on a textured urban wall.",
        img: "IMG_1127.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Cyberpunk City`,
        attribute: "Cyberpunk City - the environment is a Futuristic cityscape with neon lights, holograms, and high-tech elements in a dark setting.",
        img: "IMG_1128.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Desert Sunset`,
        attribute: "Desert Sunset - the environment is a desert sunset The warm glow of a setting sun over a serene desert landscape.",
        img: "IMG_1129.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Industrial Loft`,
        attribute: "Industrial Loft - the environment is an industrial loft, Features raw textures like brick walls and exposed beams, offering a contrast to elegant fashion items.",
        img: "IMG_1130.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Infrared`,
        attribute: "Infrared - infrared effect, infrared style, infrared, A landscape fashion editorial shot in infrared, creating an otherworldly effect with ethereal landscapes and unique skin tones.",
        img: "IMG_1131.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Lavish Hotel Suite`,
        attribute: "Lavish Hotel Suite -  the environment is a lavish hotel suite, Epitomizes luxury and comfort, with elegant interiors and sumptuous furnishings, ideal for high-end lingerie and couture.",
        img: "IMG_1132.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Luxury Loft`,
        attribute: "Luxury Loft - the environment is a luxury loft Spacious, with high ceilings, large windows, and an abundance of natural light, often featuring modern furniture and art pieces.",
        img: "IMG_1134.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Modern Art Gallery`,
        attribute: "Modern Art Gallery - the environment is a modern art gallery, Minimalist and contemporary, offering a sophisticated background that allows the fashion pieces to stand out.",
        img: "IMG_1135.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Mountain Peak`,
        attribute: "Mountain Peak - The environment is a rugged beauty of a mountain peak, perhaps at dawn or dusk for dramatic lighting",
        img: "IMG_1136.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Neon Noir`,
        attribute: "Neon Noir - the environment is neon noir, Dark, moody urban scenes illuminated by neon lights, evoking mystery and intrigue.",
        img: "IMG_1137.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Nightlife`,
        attribute: "Nightlife - a the environment is a nighttime neon city street with puddles and reflections",
        img: "IMG_1138.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Ocran`,
        attribute: "Ocran - the environment is a backgtround of a beaitful ocean and waves against a sunning sky",
        img: "IMG_1139.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Polaroid`,
        attribute: "Polaroid - a polaroid effect, polaroid photography",
        img: "IMG_1140.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Rooftop Garden`,
        attribute: "Rooftop Garden - the environment is a rooftop garden, Offers a blend of urban and natural elements, with a city skyline backdrop, perfect for day or evening shoots.",
        img: "IMG_1141.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Rustic Cabin`,
        attribute: "Rustic Cabin - the environment is a rustic cabin, A cozy, wooden cabin in a forest or mountain setting, evoking warmth and solitude.",
        img: "IMG_1142.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Secluded Beach`,
        attribute: "Secluded Beach - the environment is a secluded beach, A serene and beautiful backdrop with natural lighting, ideal for swimwear and summer collections.",
        img: "IMG_1143.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Space Odyssey`,
        attribute: "Space Odyssey - the environment is a A deep space scene with stars, planets, and possibly a spacecraft, capturing the vastness of the universe.",
        img: "IMG_1144.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        name: `Underwater Reef`,
        attribute: "Underwater Reef - the environment is an underwater reef The vibrant colors and diverse life of a coral reef, illuminated by dappled sunlight.",
        img: "IMG_1145.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Vintage Railway Station`,
        attribute: "Vintage Railway Station - the environment is a vintage railway station, Offers a mix of romantic nostalgia and architectural interest, perfect for dramatic and timeless pieces.",
        img: "IMG_1146.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Designer Showroom`,
        attribute: "Designer Showroom - the environment is a designer showroom, A space where the environment is as curated as the fashion, with every detail contributing to the luxury aesthetic.",
        img: "IMG_1147.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Dreamy Pastel`,
        attribute: "Dreamy Pastel - the environment is dreamy pastel, Soft, pastel colors blended smoothly for a dreamlike quality.",
        img: "IMG_1148.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Elegant Greenhouse`,
        attribute: "Elegant Greenhouse - the environment elegant greenhouse, Lush, vibrant, and filled with natural light, creating a unique juxtaposition between nature and high fashion.",
        img: "IMG_1149.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Film Grain`,
        attribute: "Film Grain - a film grain effect, film grain",
        img: "IMG_1150.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Forest Mist`,
        attribute: "Forest Mist - the environment is a serene, misty forest scene with soft, diffused light filtering through trees.",
        img: "IMG_1151.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Glacial Ice`,
        attribute: "Glacial Ice - the environment is The cool blues and crisp whites of a glacial landscape, emphasizing purity and scale.",
        img: "IMG_1152.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Golden Hour`,
        attribute: "Golden Hour - the environment is golden hour, The warm, soft light of the golden hour, casting long shadows and a golden hue.",
        img: "IMG_1153.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `HDR (High Dynamic Range)`,
        attribute: "HDR (High Dynamic Range) - HDR, High Dynamic Range, HDR, outdoor fashion shoot with a model, combining multiple exposures to capture every detail in both bright and shadowed areas, showcasing high dynamic range.",
        img: "IMG_1154.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `High-Key Lighting`,
        attribute: "High-Key Lighting - A portrait of a model in a modern, minimalist setting, illuminated with high-key lighting to create a bright, airy, and pure ambiance.",
        img: "IMG_1155.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Historic Mansion`,
        attribute: "Historic Mansion - the environment is a historic mansion, Provides an opulent setting with rich textures and grandeur, suitable for luxury brand showcases.",
        img: "IMG_1156.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  down: function (queryInterface, Sequelize) {
    return this.execute(queryInterface, Sequelize, rollbackCommands);
  },
};
