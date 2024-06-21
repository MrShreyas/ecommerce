import { connect } from "@/DbConfig/DbConfig";
import Cart from "@/model/cartModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
    
    try {
        const userId = await getDataFromToken(request);
        const cart = await Cart.findOne({user_id: userId})
        return NextResponse.json(cart)
    } catch (error: any) {
        return NextResponse.json(error);
    }

}