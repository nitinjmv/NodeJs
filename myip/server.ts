import express from 'express';

const app:express.Application = express();
const port = 5000;


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.set('views', __dirname + '/public'); 



// Route for rendering the index.ejs template
app.get('/', (req, res) =>{
    res.render('index', {'ip': req.ip});
});

// Start the server
app.listen(port, () => {
    console.log(`server listening @${port}`);
});