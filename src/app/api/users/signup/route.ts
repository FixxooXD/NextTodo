import { NextRequest, NextResponse } from "next/server";
import bcryptjs from  "bcryptjs"
import { connect } from "@/app/Dbconfig/config";
import User from "@/app/models/userModel"

export async function POST(request: NextRequest) {
    connect();
    try {
  
       console.log("Getting Request");
             
        const reqBody = await request.json();
        const { userName, email, password } = reqBody;
        console.log(userName)
        console.log(email)
        console.log(password);
        
        
        
        
        // Some Validations
        if (!userName || !email || !password) {
            return NextResponse.json({ error: "User data not found" }, { status: 400 });
        }   

        // Checks if user Already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            todo: []
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
