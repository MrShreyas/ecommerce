import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/DbConfig/DbConfig";
import User from "@/model/userModel";

connect();

export async function POST(request: NextRequest) {
    try {
            const reqBody = await request.json();
            const { username, email, password ,firstname, lastname} = reqBody;
            console.log("reqBody",reqBody);

            const user = await User.findOne({ email });
            if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
                );
            }

            const newUser = new User({
                username,
                email,
                password,
                firstname,
                lastname,
              });

              console.log("newUser", newUser);
              
              const savedUser = await newUser.save();
              console.log("saved User", savedUser);
              return NextResponse.json({
                message: "User created susscesfully",
                success: true,
                savedUser,
              });
            
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}