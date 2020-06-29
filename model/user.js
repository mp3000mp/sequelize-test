
module.exports = (sequelize, DataTypes) => {

    let user = sequelize.define('user', {
        email: DataTypes.STRING,
        locale: DataTypes.STRING(2)
    }, {
        timestamps: false,
        tableName: 'user'
    });

    return user;
};
