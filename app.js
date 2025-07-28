// create express app
const app = require('express')();

// root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// api endpoint
app.get('/api/:date?', (req, res) => {

    const dataParam = req.params.date;
    let date;

    // if user didn't provide a date, use current data
    if(!dataParam){
        date = new Date();
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }
    
    // if user provided a valid date, parse + return JSON w/ unix + utc date
    else if (!isNaN(dataParam)){
        date = new Date(parseInt(dataParam));
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }

    // if date is invalid, respond with error
    else {
        res.json({
            error: "Invalid Date"
        });
    }
});

// export the app
module.exports = app;