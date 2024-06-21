import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/DbConfig/DbConfig";
import User from "@/model/userModel";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, password } = reqBody;

        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json(
                { error: "User does not exists" },
                { status: 400 }
                );
        }
        if(password!=user.password)
            {
                return NextResponse.json({ error: "Invalid passward" }, { status: 400 });
            }

            const tokenData = {
                id: user._id,
                username: user.username,
                email: user.email,
              };
          
              //create token
              const token = await jwt.sign(tokenData, process.env.TOKEN_SECRETE!, {
                expiresIn: "1d",
              });
          
              const response = NextResponse.json({
                message: "Login successfull",
                success: true,
              });
          
              response.cookies.set("token", token, { httpOnly: true });
              return response;
        
    } catch (error) {
        
    }
    
}