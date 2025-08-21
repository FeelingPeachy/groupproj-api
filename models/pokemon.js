module.exports =  (sequelize, DataTypes) => {
    const Pokemon = sequelize.define("Pokemon", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        base_experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Pokemon;
}