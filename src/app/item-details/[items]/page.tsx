"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import  axios  from "axios";


export default function ItemDetails({params}: any) {

    const [itemData, setItemData] = useState({
        color: "",
        itemdescription: " ",
        itemname: "",
        price: "",
        rating: "",
        _id: "",
    })

    useEffect(() => {
        async function getItem() {
            try {
                const _id = params.items
                console.log(_id);
            const response = await axios.post("/api/items/getitem", {_id})
                console.log("response",response);
                const data = response.data;
                console.log("data",data);
                setItemData(data);
                console.log("items",itemData);
            } catch (error: any) {
                console.log(error.message);
                
            }   
        }
        
        getItem();
    
      
    }, [])
    
    

    return(
        <>
            <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
                ></div>
              </div>
            </div>
            <h1 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">{itemData.itemname}</h1>
            <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {itemData.itemdescription}
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">{itemData.rating} of 5 stars</p>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Color</h3>
            <div className="flex gap-3 p-3 overflow-x-hidden">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111518] text-sm font-medium leading-normal">{itemData.color}</p>
              </div>
              
            </div>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Price</h3>
            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-2 pt-4">{itemData.price}</h2>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <Link href="/cart"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Cart</span>
                </Link>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}
