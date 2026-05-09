import 'dotenv/config';
import express from 'express';
const app=express();
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Server running"
    })
})
app.listen(PORT,()=>{
    console.log(`haqdar server listening at http://localhost:${PORT}`)
})