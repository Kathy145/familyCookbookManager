const mongoose = require('./models/recipe');

const mongoUri = 'mongodb://localhost/recipemanager';

mongoose.Promise = Promise;

if (process.env.NODE_ENV == 'production') {
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
            console.log(
                'Connection to production database failed!',
                connectionError
            )
        );
} else {
    mongoose
        .connect(mongoUri, { useMongoClient: true })
        .then(connection =>
            console.log(
                `Connection established to recipe database '${
                    connection.db.databaseName
                }'`
            )
        )
        .catch(connectionError =>
            console.log('Connection recipe database failed!', connectionError)
        );
}

module.exports = mongoose;
