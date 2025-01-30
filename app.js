//Import Express
import express from 'express';

//Instantiate an Express application
const app = express();

const appointments = [];

//Serve static files from the 'public' directory
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


//Define a port number for our server to listen on
const PORT = 3000;

//Define a "default" route for our home page
app.get('/', (req, res) => {
    
    //Send our home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) => {
    //console.log(req.body);
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.date,
        timestamp: new Date()
    };

    appointments.push(appointment);
    res.send(`<h1>Appointment Confirmed!! Thank you ${req.body.fname}!`);
});

app.get('/admin/appointments', (req, res) => {
    res.send(appointments);
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});