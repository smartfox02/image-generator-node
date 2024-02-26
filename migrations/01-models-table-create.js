const Sequelize = require('sequelize');
const {v4: uuidv4} = require('uuid')

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
    await queryInterface.createTable("models", {
      id: {
        "type": Sequelize.UUID,
        "primaryKey": true,
        "defaultValue": Sequelize.UUIDV4
      },
      name: {
        "type": Sequelize.STRING,
        "allowNull": false,
      },
      attribute: {
        "type": Sequelize.STRING,
        "allowNull": true,
      },
      prompt: {
        "type": Sequelize.STRING,
        "allowNull": true,
      },
      img: {
        "type": Sequelize.STRING,
        "allowNull": true,
      },
      createdAt: {
        "type": Sequelize.DATE,
        "allowNull": false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        "type": Sequelize.DATE,
        "allowNull": false,
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.bulkInsert('models', [
      {
        id: uuidv4(),
        name: 'Abegail L',
        attribute:'172cm, 5ft 7.5”, 32-25-36',
        prompt: 'A slim Asian model woman with black hair and light ta, brown eyes, beautiful face',
        img: "IMG_1223.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Ada B, 176cm',
        attribute:'5ft 9.5”, 33.5-25.5-35.5',
        prompt: 'A slim white model woman with brown hair, blue eyes, beautiful face',
        img: "IMG_1224.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Adim U',
        attribute:'172cm, 5ft 7.5”, 33.5-25.5-36',
        prompt: 'A slim Black model woman with brown eyes, brown curly hair, beautiful face',
        img: "IMG_1225.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Adriana P',
        attribute:'174 cm, 5ft 8.5, 33-24 -36',
        prompt: 'A slim model woman with dark brown hair and amber eyes, beautiful face',
        img: "IMG_1226.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Aggeliki M',
        attribute:'175 cm, 5ft 9, 32.5- 25- 36.5',
        prompt: 'A slim model woman with brown hair, brown eyes, beautiful face',
        img: "IMG_1227.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Alana K',
        attribute:'179 cm, 5ft 10.5, 34 - 27 - 37.5',
        prompt: 'A slim model woman with brown hair and green eyes, beautiful face',
        img: "IMG_1228.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Alexandra W',
        attribute:'180 cm, 5ft 11, 32.5 - 27 - 39',
        prompt: 'A slim model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1229.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Alice M',
        attribute:'177 cm, 5ft 9.5, 32.5 - 24.5 - 35',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1230.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Alice O',
        attribute:'172 cm, 5ft 7.5, 32.5 - 24.5 - 37',
        prompt: 'A slim model woman with blonde hair and blue eyes, beautiful face',
        img: "IMG_1231.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Alya T',
        attribute:'176 cm, 5ft 9.5, 33.5 - 23.5 - 34.5',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1232.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Amanda C',
        attribute:'173 cm ,5ft 8, 32.5 - 24 - 35',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1233.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Amelie B',
        attribute:'178 cm, 5ft 10, 31 - 23 - 34.5',
        prompt: 'A slim model woman with blonde hair and brown eyes, beautiful face',
        img: "IMG_1234.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Ana G',
        attribute:'175 cm, 5ft 9, 33 - 26 - 40.5',
        prompt: 'A slim model woman with blonde hair and brown eyes, beautiful face',
        img: "IMG_1235.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Ana V',
        attribute:'175 cm, 5ft 9, 32 - 24.5 - 35.5',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1236.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Anastasia R',
        attribute:'172cm, 5ft 7.5”, 32-25-36',
        prompt: 'A slim Asian model woman with black hair and light ta, brown eyes, beautiful face',
        img: "IMG_1237.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Aneesah K',
        attribute:'165 cm, 5ft 5, 30.5 - 25 - 33',
        prompt: 'A slim model woman with black hair and green eyes, beautiful face',
        img: "IMG_1238.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Angelika C',
        attribute:'170 cm, 5ft 7, 29.5 - 23 - 34',
        prompt: 'A slim model woman with blonde hair and blue eyes, beautiful face',
        img: "IMG_1239.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Ange-Sophie R',
        attribute:'177 cm, 5ft 9.5, 36 - 25.5 - 38.5',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1240.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Anina G',
        attribute:'173 cm, 5ft 8, 35 - 25 - 34.5',
        prompt: 'A slim model woman with brown hair and blue eyes, beautiful face',
        img: "IMG_1241.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Antonia P',
        attribute:'173 cm, 5ft 8, 32.5 - 24 - 33.5',
        prompt: 'A slim model woman with blonde hair and green eyes, beautiful face',
        img: "IMG_1242.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Athena B',
        attribute:'163 cm, 5ft 4, 31.5 - 25 - 34.5',
        prompt: 'A slim model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1243.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Barbara N',
        attribute:'177 cm, 5ft 9.5, 32.5 - 23.5 - 34.5',
        prompt: 'A slim model woman with brown hair, brown eyes, beautiful face',
        img: "IMG_1244.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Beatriz M',
        attribute:'170 cm, 5ft 7, 31.5 - 26 - 36.5',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1245.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Ben H',
        attribute:'176 cm, 5ft 9.5, 32.5 - 25 - 36',
        prompt: 'A slim Asian model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1246.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Bianca E',
        attribute:'175 cm, 5ft 9, 33 - 23.5 - 36',
        prompt: 'A slim Asian model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1247.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Birdy M',
        attribute:'177 cm, 5ft 9.5, 32 - 25 - 36',
        prompt: 'A slim model woman with blonde hair and brown eyes, beautiful face',
        img: "IMG_1248.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Camille M',
        attribute:'175 cm, 5ft 9, 32 - 25 - 35',
        prompt: 'A slim model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1249.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Candy A',
        attribute:'170 cm,5ft 7, 32.5 - 23.5 - 35.5',
        prompt: 'A slim Asian model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1250.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Carla B',
        attribute:'173 cm, 5ft 8, 30.5 - 23.5 - 36',
        prompt: 'A slim Asian model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1251.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Carolina P',
        attribute:'175 cm, 5ft 9, 31.5 - 25 - 36',
        prompt: 'A slim model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1252.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Cassia H',
        attribute:'180 cm, 5ft 11, 36 - 30.5 - 39.5',
        prompt: 'A slim Asian model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1253.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Cassie C',
        attribute:'173 cm, 5ft 8, 30.5 - 23.5 - 36',
        prompt: 'A slim model woman with red hair and blue eyes, beautiful face',
        img: "IMG_1254.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Celine M',
        attribute:'168 cm, 5ft 6, 31.5 - 23.5 - 36.5',
        prompt: 'A slim Asian model woman with brown hair and brown eyes, beautiful face',
        img: "IMG_1255.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Christina Z',
        attribute:'173 cm, 5ft 8, 34 - 26.5 - 38.5',
        prompt: 'A slim model woman with blonde hair and blue eyes, beautiful face',
        img: "IMG_1256.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Cynthia A',
        attribute:'177 cm, 5ft 9.5, 31 - 25.5 - 35.5',
        prompt: 'A slim Asian model woman with black hair and brown eyes, beautiful face',
        img: "IMG_1257.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  down: async function (queryInterface, Sequelize) {
    await queryInterface.dropTable('models')
  }
};
