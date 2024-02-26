const dbConfig = require('../configs/db.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig[process.env.ENV]);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.js')(sequelize, Sequelize)
db.models = require('./models.js')(sequelize, Sequelize)
db.brands = require('./brands.js')(sequelize, Sequelize)
db.aesthetics = require('./aesthetics.js')(sequelize, Sequelize)
db.clothing = require('./clothing.js')(sequelize, Sequelize)
module.exports = db;