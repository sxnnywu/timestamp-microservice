// create express app
const app = require('express')();

const cors = require('cors');
app.use(cos({ optionsSuccessStatus: 200 }));

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
    else if (!isNaN(Number(dateParam))){
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// export the app
module.exports = app;