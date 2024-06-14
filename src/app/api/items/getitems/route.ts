import { connect } from "@/DbConfig/DbConfig";
import Items from "@/model/itemModel";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET() {
    try {
        

        const item = await Items.find();
        if (!item) {
            console.log("Item not found");
            
        }
        console.log(item);
        return NextResponse.json(item);
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    
}