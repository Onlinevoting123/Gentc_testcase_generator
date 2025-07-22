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
            contents: `Give only 5 edge testcases for leetcode question ${prompt} no need of description and explanation just need input= and output= if the question is not in leetcode convey the number entered question is not present`,
        });
        user.prompt=response.text;
        await user.save();
    return res.json({success:true,message:response.text});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}
