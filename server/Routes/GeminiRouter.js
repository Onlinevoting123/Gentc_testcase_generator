import express from 'express';
import { getUserPrompt } from '../controllers/GeminiControllers.js';

const GeminiRouter=express.Router();

GeminiRouter.post('/prompt',getUserPrompt);

export default GeminiRouter;