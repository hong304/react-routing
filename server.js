var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


const path = require('path')
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Load mongoose package
// var mongoose = require('mongoose');
// // Connect to MongoDB and create/use database called todoAppTest
// mongoose.connect('mongodb://localhost/todo');
//
// // Create a schema
// var TodoSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean,
//     note: String,
//     updated_at: { type: Date, default: Date.now },
// });
//
// // Create a model based on the schema
// var Todo = mongoose.model('Todob', TodoSchema);

// // Create a todo in memory
// var todoa = new Todo({name: 'Master NodeJS!', completed: false, note: 'Getting there...'});
// // Save it to database
// todoa.save(function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log(todoa);
// });

// Todo.create({name: 'Create something with Mongoose', completed: true, note: 'this is one'}, function(err, todo){
//     if(err) console.log(err);
//     else console.log(todo);
// });

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
