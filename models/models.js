const { models } = require(".")

module.exports = (sequelize, Sequelize) => {
    const Models = sequelize.define('models', {
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

    return Models
}