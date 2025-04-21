const express = require('express');
const router = require('./src/controller/routes');
const app = express();
const PORT = 3030;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/api', router)

app.listen(PORT, async() => {
    try{
        console.log(`server is running in port ${PORT}`);
    }
    catch(err){
        console.log("error in index",err);
    }
});