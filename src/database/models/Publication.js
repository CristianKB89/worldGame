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
        tableName: 'publications',
         //PARAOIND = PARAOINDICAR QUE SE CREE LA TABLA CON LOS TIMESTAMPS
         timestamps : true,
         createdAt: "created_at",
         updatedAt: "updated_at",
         deletedAt: false,
         //PARAOIND
         deletedAt: "deleted_at",
         paranoid: true,
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