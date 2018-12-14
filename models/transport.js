module.exports = (sequelize, DataTypes) => {
     return sequelize.define('transport', {
        dOrA: {
            type: DataTypes.ENUM('Departure', 'Arrival'),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Flight', 'Train', 'Bus', 'Car', 'Boat', 'Other'),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        upTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        downTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        participants: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
    });
};