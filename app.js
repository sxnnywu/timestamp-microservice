// create express app
const app = require('express')();

// root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// api endpoint
app.get('/api/:date?', (req, res) => {

    const dateParam = req.params.date;
    let date;

    // if no date, use current data
    if(!dateParam){
        date = new Date();
    }
    
    // if numerical date, treat as UNIX timestamp
    else if (!isNaN(dateParam)){
        date = new Date(parseInt(dateParam));
    }
    // if valid date string, parse it
    else {
        date = new Date(dateParam);
    }

    // if date is invalid, respond with error
    if(date.toString() === "Invalid Date") {
        return res.json({
            error: "Invalid Date"
        });
    }

    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
});

// export the app
module.exports = app;