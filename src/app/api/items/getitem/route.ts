import { connect } from "@/DbConfig/DbConfig";
import Items from "@/model/itemModel";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const _id = reqBody;
        console.log(reqBody);

        const item = await Items.findOne({_id});
        if (!item) {
            console.log("Item not found");
            
        }
        return NextResponse.json(item);
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    
}