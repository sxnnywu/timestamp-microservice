// create express app
const app = require('express')();

// root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// api endpoint
app.get('/api/:date?', (req, res) => {

    const { date } = req.params;
    let parsedDate;

    console.log("Parsed input: ", date);
    console.log("Final date object: " + parsedDate);
    console.log("UTC string: " + parsedDate?.toUTCString());

    // if no date, use current data
    if(!data){
        parsedDate = new Date();
    }
    
    // if numerical date, treat as UNIX timestamp
    else if (!isNaN(data)){
        parsedDate = new Date(parseInt(date));
    }
    // if valid date string, parse it
    else {
        parsedDate = new Date(date);
    }

    // if date is invalid, respond with error
    if(parsedDate.toString() === 'Invalid Date') {
        return res.json({
            error: "Invalid Date"
        });
    }

    return res.json({
        unix: parsedDate.getTime(),
        utc: parsedDate.toUTCString()
    })
});

// export the app
module.exports = app;