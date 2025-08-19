import express from 'express';
import sum from './sum.js';
import { parse } from 'dotenv';


const app = express();

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.get('/home', async(req,res)=>{
    res.json({
        message: " Hello Tejas ! This is a GET request response."
    })
})

app.get('/getsum/:a/:b', async(req,res)=>{
    const{a,b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
})