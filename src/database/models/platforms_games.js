module.exports = (sequelize, dataTypes) => {
    let alias = 'platforms_games';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        platform_id: {
            type: dataTypes.STRING,
            allowNull: false
        },
        game_id: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'platforms_games',
        timestamps: false
    };

    const platforms_games = sequelize.define(alias, cols, config);

    platforms_games.associate = (models) => {
        platforms_games.belongsTo(models.Game, {
            as: "platforms_games",
            foreignKey: "game_id",
        }),
        platforms_games.belongsTo(models.Platform, {
            as: "games_platforms",
            foreignKey: "platform_id",
        })
    };

    return platforms_games
}