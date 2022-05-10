module.exports = (sequelize, dataTypes) => {
    let alias = 'Platform';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'Platforms',
        timestamps: false
    };
    const Platform = sequelize.define(alias, cols, config);

    Platform.associate = (models) => {
        Platform.belongsToMany(models.Game, {
            as: 'platforms',
            through: 'platforms_games',
            foreignKey: 'platform_id',
            otherKey: 'game_id',
            timestamps: false
        })
    }

    return Platform
};