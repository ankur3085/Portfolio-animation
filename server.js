const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 9000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the '/about' route
app.get('/about', (req, res) => {
  res.render('about'); 
});


app.get('/', (req, res) => {
  res.render('index'); 
});
app.get('/skills',(req,res)=>{
  res.render('skills');
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





