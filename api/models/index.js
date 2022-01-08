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

// association database: add relationship all table
db.users.hasMany(db.booking, {foreignKey: 'user_id'});
db.booking.belongsTo(db.users, {foreignKey: 'user_id'});

db.booking.hasMany(db.booking_detail, {foreignKey: 'booking_id'});
db.booking_detail.belongsTo(db.booking, { foreignKey: 'booking_id'});
db.service.hasMany(db.booking_detail, {foreignKey: 'service_id'});
db.booking_detail.belongsTo(db.service, { foreignKey:'service_id'});

db.categories.hasMany(db.gallery, {foreignKey: 'cate_id'});
db.gallery.belongsTo(db.categories, {foreignKey:'cate_id'});

db.categories.hasMany(db.service, {foreignKey:'cate_id'});
db.service.belongsTo(db.categories, {foreignKey: 'cate_id'});

db.categories.hasMany(db.voucher, {foreignKey: 'cate_id'});
db.voucher.belongsTo(db.categories, { foreignKey:'cate_id'});

db.users.hasMany(db.voucher, {foreignKey:'user_id'});
db.voucher.belongsTo(db.users, {foreignKey:'user_id'});

db.users.hasMany(db.comment, {foreignKey: 'user_id'});
db.comment.belongsTo(db.users, { foreignKey:'user_id'});

db.blogs.hasMany(db.comment, {foreignKey:'blog_id'});
db.comment.belongsTo(db.blogs, {foreignKey:'blog_id'});

module.exports = db;