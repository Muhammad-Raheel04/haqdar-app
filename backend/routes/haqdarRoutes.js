import express from 'express';
import { haqdar } from '../controllers/haqdarController.js';
const router=express.Router();

router.get('/get-response',haqdar);

export default router;