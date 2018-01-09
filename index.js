const express       = require('express');
const hbs           = require('express-handlebars')
const RecipeController = require("./controllers/recipes")
const app           = express();

app.set('port', process.env.PORT || 3420)

// const routes = require('./config/routes')
// app.use(routes);

app.set('view engine', 'hbs')
app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        partialsDir: 'views/',
        layoutsDir: 'views/',
        defaultLayout: 'layout'
    })
);

app.use('/assets', express.static('public'))

app.use('/', RecipeController)

// app.get('/', (req, res) => {
//     res.render('app-welcome');
// });

// app.get('/', (req, res) => {
// res.send('hello world')
// })

app.listen(app.get('port'), () => {
    console.log(`✅  It's aliiive on PORT: ${app.get('port')} Aww...yeah!🌟`);
});
