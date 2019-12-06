require('dotenv').config();
const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      errorHandler = require('./handlers/error'),
      authRoutes = require('./routes/auth'),
      {loginRequired, ensureCorrectUser} = require('./middleware/auth');
      messagesRoutes = require('./routes/messages'),
      PORT = 8081;

//cross origin policy
app.use(cors());
//because we need to get data as json
app.use(bodyParser.json());
//if theres ever any request that starts with api/auth go use auth routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages',
    loginRequired, 
    ensureCorrectUser, 
    messagesRoutes
);

app.get('/api/messages', loginRequired, async function(req,res,next){
    try{
        let messages = await db.Message.find()
            .sort({createdAt: 'desc'})
            .populate('user', {
                username: true,
                profileImageUrl: true 
            });
            return res.status(200).json(messages);
    } catch(err){
        return next(err);
    }
});

//ALL ROUTES
//if none a are reached
app.use(function(req,res,next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use(errorHandler);

app.listen(PORT, function(){
    //template strings
    console.log(`Server is starting on port ${PORT}`);
})