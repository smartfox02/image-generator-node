const { models } = require(".")

module.exports = (sequelize, Sequelize) => {
    const Brands = sequelize.define('brands', {
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
    })

    return Brands
}