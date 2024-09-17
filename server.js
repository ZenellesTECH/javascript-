const  express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/v1/users');
const app = express();
const PORT = 4000;

const corsOptions ={
    origin: 'http://greenmark.com',
    methods: ['GET, POST, PUT, DELETE'],
}


app.use(cors(corsOptions));
app.use(express.json()); //to communicate using json
app.use('/v1/users',usersRouter);

app.listen(PORT,() =>{
    console.log(`serevr is running on port ${PORT}`);
});  