import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/DbConfig/DbConfig";
import User from "@/model/userModel";
import Cart from "@/model/cartModel";


connect();

export async function POST(request: NextRequest) {
    try {
            const reqBody = await request.json();
            const { username, email, password ,firstname, lastname} = reqBody;

            const user = await User.findOne({ username });
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
              
              const savedUser = await newUser.save();

              const user1 = await User.findOne({ username });
              const user_id = user1._id;
              const cart = new Cart({
                user_id
              })
              const savedCart = await cart.save();
              console.log(savedCart);
              

              return NextResponse.json({
                message: "User created susscesfully",
                success: true,
                savedUser,
              });
            
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}