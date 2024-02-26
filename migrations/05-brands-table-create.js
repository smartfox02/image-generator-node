const Sequelize = require('sequelize');
const {v4: uuidv4} = require('uuid')

const migrationCommands = function (transaction) {
  return [{
    fn: "createTable",
    params: [
      "brands",
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
    params: ["brands", {
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
    await queryInterface.bulkInsert('brands', [
      {
        id: uuidv4(),
        name: `Adidas`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Nike`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Reebok`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Puma`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Under Armour`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `New Balance`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Fila`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Champion`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Vans`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Converse`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `ASICS`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Skechers`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: `Martens`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        id: uuidv4(),
        name: `Birkenstock`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  down: function (queryInterface, Sequelize) {
    return this.execute(queryInterface, Sequelize, rollbackCommands);
  },
};
