import express from 'express';
import { getUserPrompt,gfg,interviewbit,lintcode,binarysearch,codeforces,codechef,atcoder,hackerrank,spoj } from '../controllers/GeminiControllers.js';

const GeminiRouter=express.Router();

GeminiRouter.post('/e/prompt',getUserPrompt);
GeminiRouter.post('/e/gfg',gfg);
GeminiRouter.post('/e/interviewbit',interviewbit);
GeminiRouter.post('/e/lintcode',lintcode);
GeminiRouter.post('/e/binarysearch',binarysearch);
GeminiRouter.post('/e/codeforces',codeforces);
GeminiRouter.post('/e/codechef',codechef);
GeminiRouter.post('/e/atcoder',atcoder);
GeminiRouter.post('/e/hackerrank',hackerrank);
GeminiRouter.post('/e/spoj',spoj);

export default GeminiRouter;
