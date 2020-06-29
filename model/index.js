const Sequelize = require('sequelize');
const db = new Sequelize('mysql://user:password@localhost:3306/dbname');

// add entities here
const Model = {
    sequelize: db,
    User: require('./user')(db, Sequelize.DataTypes),
    Application: require('./application')(db, Sequelize.DataTypes)
}

module.exports = Model;
