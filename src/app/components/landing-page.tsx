"use client"

import axios from "axios";
import Link from "next/link"

import { useEffect, useState } from "react"




export default function LandingPage() {

    let prodId;
    const [items , setItems] = useState([{
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
                const response = await axios.get("/api/items/getitems")
                console.log("response",response);
                const data = response.data;
                console.log("data",data);
                setItems(data);
                console.log("items",items);
            } catch (error: any) {
                console.log(error.message);
                
            }   
        }
        
        getItems();
    }, [])
    
    
    return(
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                        <div className="@[480px]:p-4">
                            <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                            >
                            <div className="flex flex-col gap-2 text-center">
                                <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                >
                                The Summer Collection
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                Elevate your wardrobe with our latest styles
                                </h2>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Women's Clothing</h2>
                            {items.map((product, index) => 
                            <div key={index}  className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                <div  className="flex flex-col gap-3 pb-3">
                                    <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                    ></div>
                                    <div>
                                    <p  className="text-[#0e151b] text-base font-medium leading-normal">{product.itemname}</p>
                                    <p  className="text-[#507695] text-sm font-normal leading-normal">{product.price}</p>
                                    </div>
                                    <Link href={`/item-details/${product._id}`}>see more</Link>
                                </div>
                            </div>
                            )}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}