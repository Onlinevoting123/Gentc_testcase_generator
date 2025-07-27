import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
import userModel from "../models/userModel.js";

export const getUserPrompt=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for leetcode question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in leetcode convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const gfg=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for geeksforgeeks question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in geeksforgeeks convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const interviewbit=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for interviewbit question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in interviewbit convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const lintcode=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for lintcode question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in lintcode convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const binarysearch=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for binarysearch question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in binarysearch convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const codeforces=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for codeforces question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in codeforces convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const codechef=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for codechef question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in codechef convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const atcoder=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for atcoder question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in atcoder convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const hackerrank=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for hackerrank question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in hackerrank convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
export const spoj=async(req,res)=>{
    try{
        const {email,prompt} = req.body;
        const user=await userModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"login to continue"});
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Give only 5 edge testcases for spoj question ${prompt} no need of description and explanation just need input=''and output='' if the question is not in spoj convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
