var express = require( "express");
var config = require("./config.js")
var cors = require('cors')

const app  = express();
const PORT = 3001;
app.use(cors())
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/greet/:name', (req, res) => {
    res.send({greet: 'hello '+ req.params.name})
})

app.use("/book", require("./routes/pages/book.js"))
app.use("/movie", require("./routes/pages/movie.js"))

app.listen(PORT,'0.0.0.0', () => {
    console.log('App is listening to port: ' + PORT); 
});




