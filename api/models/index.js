const env = process.env.NODE_ENV || "development";
const dbConfig = require(__dirname + '/../config/config.json')[env];
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.categories = require('./category.js')(sequelize, Sequelize);
db.blogs = require('./blogs.js')(sequelize, Sequelize);
db.service = require('./service')(sequelize, Sequelize);
db.users = require('./users')(sequelize, Sequelize);
db.booking_detail = require('./booking_detail')(sequelize, Sequelize);
db.booking = require('./booking')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);
db.gallery = require('./gallery')(sequelize, Sequelize);
db.voucher = require('./voucher')(sequelize, Sequelize);
// sequelize.sync({ alter: true });
module.exports = db;