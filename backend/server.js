import 'dotenv/config';
import express from 'express';
import haqdarRoutes from './routes/haqdarRoutes.js';
const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use('/api/v1',haqdarRoutes);
app.listen(PORT,()=>{
    console.log(`haqdar server listening at http://localhost:${PORT}`)
})