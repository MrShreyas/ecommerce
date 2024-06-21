import { connect } from "@/DbConfig/DbConfig";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/model/cartModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { _id, quantity } = reqBody;
        
        const userId = await getDataFromToken(request);
        
        
        let cart = await Cart.findOne({ user_id: userId });
        if (cart) {
            // Check if the item already exists in the cart
            const itemIndex = cart.items.findIndex((item: any) => item.product_id.toString() === _id);

            if (itemIndex > -1) {
                // If the item exists, update the quantity
                if (cart.items[itemIndex].quantity > 1) {
                    cart.items[itemIndex].quantity -= 1;
                } else {
                    cart.items.splice(itemIndex, 1);
                }
    
                await cart.save();
            }

            // Save the updated cart
    
        }
        return NextResponse.json(cart);
        
    } catch (error: any) {
        return NextResponse.json(error);
    }
}