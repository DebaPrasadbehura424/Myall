import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import connect from './database/conn.js'
import router from './route/router.js';


const app = express();

// middllewares
app.use(express.json());
app.use(cors());
app.use(morgan('deva'));
app.disable('x-powered-by')//less hackers know about out stack it is removing X-powered-by header 


const port = 8484;

//for get something
app.get("/", (req, res) => {
    res.status(200).json("Hero you get data")
})


//api route
app.use("/api", router);//here the link that is   "/api" is our endpoints 







//call database

connect().then(() => {
    try {
        //start server 
        app.listen(8484, () => {
            console.log("Running server: ", port);
        })
    } catch (error) {
        console.log("Cannot connect with server: ", error);
    }
}).catch((err) => {
    console.log("we can't access or find database connection: ", err);

})




