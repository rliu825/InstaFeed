
module.exports = function(sequelize, DataType) {
    var Article = sequelize.define('Article', {
        title: {
            type: DataType.STRING,
            field: 'title'
        },
        author: {
            type: DataType.STRING,
            field: 'author'
        },
        description: {
            type: DataType.STRING,
            field: 'description'
        },
        url: {
            type: DataType.STRING,
            field: 'url'
        },
        urltoImage: {
            type: DataType.STRING,
            field: 'urltoImage'
        },
        publishedAt: {
            type: DataType.STRING,
            field: 'publishedAt'
        }      
    });

    return Article;
};
