"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
    const [items, setItems] = useState([{
        color: "",
        itemdescription: " ",
        itemname: "",
        price: "",
        rating: "",
        _id: "",
    }]);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get("/api/items/getitems");
                const data = response.data;
                setItems(data);
            } catch (error: any) {
                console.log(error.message);
            }   
        }
        
        getItems();
    }, []);
    
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-full md:max-w-[960px] flex-1">
                        <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 md:rounded-xl"
                             style={{ backgroundImage: "url('/chatsrat-1.jpg')" }}>
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    The Summer Collection
                                </h1>
                                <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                                    Elevate your wardrobe with our latest styles
                                </h2>
                            </div>
                        </div>
                        <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Women's Clothing
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                            {items.map((product) => (
                                <div key={product._id} className="flex flex-col gap-3 pb-3">
                                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                         style={{ backgroundImage: `url('/download.jpg')` }}></div>
                                    <div>
                                        <p className="text-[#0e151b] text-base font-medium leading-normal">{product.itemname}</p>
                                        <p className="text-[#507695] text-sm font-normal leading-normal">{product.price}</p>
                                    </div>
                                    <Link href={`/item-details/${product._id}`} className="text-blue-600 hover:underline">See more</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
