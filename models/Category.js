
module.exports = function(sequelize, DataType) {
    var Category = sequelize.define('Category', {
        name: {
            type: DataType.STRING,
            field: 'name'
        }
    });

    return Category;
};
