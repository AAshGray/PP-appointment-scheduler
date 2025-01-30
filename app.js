//Import Express
import express from 'express';

//Instantiate an Express application
const app = express();

//Serve static files from the 'public' directory
app.use(express.static('public'));


//Define a port number for our server to listen on
const PORT = 3000;

//Define a "default" route for our home page
app.get('/', (req, res) => {
    
    //Send our home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});