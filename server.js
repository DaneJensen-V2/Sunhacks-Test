if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const bodyparser = require('body-parser') 
const express = require("express") 
const path = require('path') 
const app = express() 
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('be62d0d26ca5409787ce10b237890536');


// View Engine Setup 
app.set("views", path.join(__dirname)) 
app.set("view engine", "ejs") 
  
// Body-parser middleware 
app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

app.get("/saveData", function(req, res){ 
    res.render("SampleForm") 
}); 
   
app.post('/saveData', (req, res) => { 
    console.log("Using Body-parser: ", req.body.email) 
     search = req.body.email
}) 

//Static Files

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Server Started')

})






