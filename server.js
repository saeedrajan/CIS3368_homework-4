// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API

var selectedID = "";
app.use(bodyParser.urlencoded());
app.use(express.static('public'))
// set the view engine to ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('pages/welcome.ejs')
})
app.get('/community', function(req,res) {
    res.render('pages/comm.ejs')
})
app.get('/store', function(req,res) {
    res.render('pages/store.ejs')
})
app.get('/recipe', function(req,res) {
    res.render('pages/recipe.ejs')
})

app.listen(8081);
console.log('8080 is the magic port');

// recipe 1: https://www.allrecipes.com/recipe/228129/classic-savory-deviled-eggs/
//recipe 2: https://www.allrecipes.com/recipe/213691/debs-passover-brownies/
//recpie 3: https://www.allrecipes.com/recipe/214931/oven-roasted-asparagus/

//Components
// carousel  :https://mdbootstrap.com/docs/standard/components/carousel/#section-introduction