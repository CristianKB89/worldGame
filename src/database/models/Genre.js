module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'Genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = (models) => {
        Genre.hasMany(models.Game,{
            as: 'games',
            foreignKey: 'genre_id'
        })
    }

    return Genre
};