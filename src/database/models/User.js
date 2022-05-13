module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: dataTypes.STRING,
        },
        nickName:{
            type: dataTypes.STRING
        },
        name:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        img_user:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'Users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Publication, {
            as: 'publications',
            foreignKey: 'user_id'
        }),
        User.belongsToMany(models.Game, {
            as: 'shopingcarts',
            through: 'shoppingcart',
            foreignKey: 'user_id',
            otherKey: 'game_id',
            timestamps: false
        }),
        User.belongsToMany(models.User, {
            as: 'librarys',
            through: 'library',
            foreignKey: 'user_id',
            otherKey: 'game_id',
            timestamps: false
        })
    }
    return User;
}