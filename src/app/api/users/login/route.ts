import { NextRequest, NextResponse } from "next/server";
import bcryptjs from  "bcryptjs"
import { connect } from "@/app/Dbconfig/config";
import User from "@/app/models/userModel"
import jwt from "jsonwebtoken"


connect()

export async function POST(request: NextRequest){
    try {
         
        const reqBody = await request.json();
        const {email, password} = reqBody;

       const user =  await User.findOne({email})
        if(!user){
         return NextResponse.json({error: "User Not Found"}, {status: 400});
        }

        console.log();
        
        // check if Password is correct 
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Password is incorrrect"}, {status: 400})
        }

        const tokenData = {
            userName: user.userName,
            email
        }
 
        //Create Token
        const token = jwt.sign(tokenData, process.env.SECRETKEY! , {expiresIn: "1d"})

        const response = await NextResponse.json({
            "message": "Login Success",
        })

       response.cookies.set("token", token, {httpOnly: true})
       return response


    } catch (error:any) {
        console.log(error.message);
        NextResponse.json({error: "Something went wrong"}, {status: 500})
    }
}