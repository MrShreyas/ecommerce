"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemDetails({ params }: any) {
    const [itemData, setItemData] = useState({
        color: "",
        itemdescription: " ",
        itemname: "",
        price: "",
        rating: "",
        _id: "",
    });

    useEffect(() => {
        async function getItem() {
            try {
                const _id = params.items;
                const response = await axios.post("/api/items/getitem", { _id });
                const data = response.data;
                setItemData(data);
            } catch (error: any) {
                console.log(error.message);
            }
        }
        getItem();
    }, [params.items]);

    const onAddCart = async () => {
        try {
            const quantity = 1;
            const _id = params.items;
            const response = await axios.post("/api/cart/additem", { _id,quantity });
            console.log("item added successfully",response.data);
        } catch (error: any) {
            console.log(error.message);
            
        }
    }

    return (
        <div className="flex justify-center py-5 px-4 md:px-10 lg:px-40">
            <div className="layout-content-container flex flex-col max-w-full md:max-w-[960px] flex-1">
                <div className="flex flex-col gap-4 bg-white rounded-xl overflow-hidden p-4 md:p-6 lg:p-8">
                    <div className=" bg-center bg-no-repeat bg-cover min-h-[218px]" 
                         style={{ backgroundImage: "url('/download.jpg')" }}>
                    </div>
                    <h1 className="text-[#111518] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em]">
                        {itemData.itemname}
                    </h1>
                    <p className="text-[#111518] text-base font-normal leading-normal">
                        {itemData.itemdescription}
                    </p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal underline">
                        {itemData.rating} of 5 stars
                    </p>
                    <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">
                        Color
                    </h3>
                    <div className="flex gap-3 p-3 overflow-x-auto">
                        <div className="flex h-8 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] px-4">
                            <p className="text-[#111518] text-sm font-medium leading-normal">
                                {itemData.color}
                            </p>
                        </div>
                    </div>
                    <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">
                        Price
                    </h3>
                    <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">
                        {itemData.price}
                    </h2>
                    <div className="flex justify-start gap-3 flex-wrap px-4 py-3">
                        <Link href="/cart"  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal">
                            <span className="truncate">Add to Cart</span>
                        </Link>
                        <button onClick={onAddCart} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-bold leading-normal">
                            <span className="truncate">Add to Wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
