const mongoose = require('./models/recipe');

const mongoUri = 'mongodb://localhost/recipemanager';

mongoose.Promise = Promise;

mongodb: if (process.env.NODE_ENV == 'production') {
    mongoose
        .connect(process.env.MLAB_URL)
        .then(connection =>
            console.log(
                `Connection established to production database '${
                    connection.db.databaseName
                }'`
            )
        )
        .catch(connectionError =>
            console.log('Connection to prod database failed!', connectionError)
        );
} else {
    mongoose
        .connect(mongoUri)
        .then(connection =>
            console.log(
                `Connection established to dev database '${
                    connection.db.databaseName
                }'`
            )
        )
        .catch(connectionError =>
            console.log('Connection dev database failed!', connectionError)
        );
}


module.exports = mongoose;