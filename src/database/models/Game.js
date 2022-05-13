module.exports = (sequelize, dataTypes) => {
  let alias = "Game";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: dataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    img_card: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    img_detail: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    rating_age: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    genre_id: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "Games",
    //PARAOIND = PARAOINDICAR QUE SE CREE LA TABLA CON LOS TIMESTAMPS
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    //PARAOIND
    deletedAt: "deleted_at",
    paranoid: true,
  };
  const Game = sequelize.define(alias, cols, config);

  Game.associate = (models) => {
    Game.belongsToMany(models.User, {
      as: "shopingcarts",
      through: "shoppingcart",
      foreignKey: "game_id",
      otherKey: "user_id",
      timestamps: false,
    }),
      Game.belongsToMany(models.User, {
        as: "librarys",
        through: "library",
        foreignKey: "game_id",
        otherKey: "user_id",
        timestamps: false,
      }),
      Game.belongsToMany(models.Platform, {
        as: "platforms",
        through: "platforms_games",
        foreignKey: "game_id",
        otherKey: "platform_id",
        timestamps: false,
      }),
      Game.belongsTo(models.Genre, {
        as: "genre",
        foreignKey: "genre_id",
      });
  };

  return Game;
};
