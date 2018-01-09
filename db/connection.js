const mongoose = require('./models/recipe');

const mongoUri = 'mongodb://localhost/recipemanager';

mongoose
    .connect(mongoUri, { useMongoClient: true })
    .then(connection =>
        console.log(
            `Connection established to db '${connection.db.databaseName}'`
        )
    )
    .catch(connectionError =>
        console.log('Connection failed!', connectionError)
    );

mongoose.Promise = Promise;

module.exports = mongoose;
