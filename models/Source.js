
module.exports = function(sequelize, DataType) {
    var Source = sequelize.define('Source', {
        name: {
            type: DataType.STRING,
            field: 'name'
        }
    });

    return Source;
};
