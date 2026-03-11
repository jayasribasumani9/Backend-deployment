const express= require('express');
const app=express();
require('dotenv').config();

const route= require('./routes/quoteRoutes');
const PORT=process.env.PORT|| 3000;

app.use(express.json());

app.use("/",route);

app.use((req,res)=>{
    res.status(404).json({
        error :"Route not found"
    });
});

app.listen(PORT,()=>{
    console.log("Server listening...");
})

//server listening