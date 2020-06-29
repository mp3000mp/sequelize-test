
module.exports = (sequelize, DataTypes) => {

    let application = sequelize.define('application', {
        name: DataTypes.STRING,
        url: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'application'
    });

    return application;
};
