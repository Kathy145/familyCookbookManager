
const RecipeController = require('./controllers/recipes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('port', process.env.PORT || 3420);

// const routes = require('./config/routes')
// app.use(routes);

app.set('view engine', 'hbs');
app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        partialsDir: 'views/',
        layoutsDir: 'views/',
        defaultLayout: 'layout'
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/assets', express.static('public'));
app.get('/', (req, res) => {
    res.render('app-welcome');
});
app.use('/recipes', RecipeController);

// app.get('/', (req, res) => {
//     res.render('app-welcome');
// });

// app.get('/', (req, res) => {
// res.send('hello world')
// })

app.listen(app.get('port'), () => {
    console.log(`✅  It's aliiive on PORT: ${app.get('port')} Aww...yeah!🌟`);
});
