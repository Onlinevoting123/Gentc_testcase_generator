import userModel from "../models/userModel.js";

export const getUserData=async(req,res)=>{
    try{
        const userId=req.userId;
        const user=await userModel.findById(userId);
        if (!user){
            return res.json({success:false,message:"user not found"});
        }
        return res.json({success:true,
            userData:{
                name:user.name,
                isaccverified:user.isaccverified,
                prompt:user.prompt,
                email:user.email
            }
        });
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}