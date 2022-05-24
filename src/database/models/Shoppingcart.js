module.exports = (sequelize, dataTypes) => {
    let alias = "Shoppingcart";
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
        tableName: "Shoppingcart",
        //PARAOIND = PARAOINDICAR QUE SE CREE LA TABLA CON LOS TIMESTAMPS
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
        //PARAOIND
        deletedAt: "deleted_at",
        paranoid: true,
      };
    const Shoppingcart = sequelize.define(alias, cols, config);
  
    Shoppingcart.associate = (models) => {
        Shoppingcart.belongsTo(models.User, {
          as: "user",
          foreignKey: "user_id",
        }),
        Shoppingcart.belongsTo(models.Game, {
            as: "game",
            foreignKey: "game_id",
        })
    };
  
    return Shoppingcart;
  };