const { models } = require(".")

module.exports = (sequelize, Sequelize) => {
    const Aesthetics = sequelize.define('aesthetics', {
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
    })

    return Aesthetics
}