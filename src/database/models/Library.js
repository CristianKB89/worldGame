module.exports = (sequelize, dataTypes) => {
    let alias = "Library";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      game_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    };
    let config = {
        tableName: 'Library',
        timestamps: false
    };
    const Library = sequelize.define(alias, cols, config);
  
    Library.associate = (models) => {
        Library.belongsTo(models.User, {
          as: "user",
          foreignKey: "user_id",
        }),
        Library.belongsTo(models.Game, {
            as: "game",
            foreignKey: "game_id",
        })
    };
  
    return Library;
  };