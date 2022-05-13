module.exports = (sequelize, dataTypes) => {
    let alias = 'Publication';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.TEXT,
        },
        img:{
            type: dataTypes.STRING
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        created_at:{
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: 'Publication',
        timestamps: false
    };
    const Publication = sequelize.define(alias, cols, config);

    Publication.associate = function(models){
        Publication.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
    }
    
    return Publication;
}