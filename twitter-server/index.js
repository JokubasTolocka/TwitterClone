const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      PORT = 8081;

//cross origin policy
app.use(cors());
//because we need to get data as json
app.use(bodyParser.json());

//ALL ROUTES
//if none a are reached
app.use(function(req,res,next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(PORT, function(){
    //template strings
    console.log(`Server is starting on port ${PORT}`);
})