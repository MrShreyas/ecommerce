"use client"

import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  color: string;
  itemdescription: string;
  itemname: string;
  price: string;
  rating: string;
}

interface CartItem {
  product_id: string;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

interface ProductWithQuantity extends Product {
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<Cart>({ items: [] });
  const [productData, setProductData] = useState<ProductWithQuantity[]>([]);

  useEffect(() => {
    async function getCart() {
      try {
        const response = await axios.post("/api/cart/getcart");
        console.log("Cart data:", response.data); // Log the cart data
        setCart(response.data);
      } catch (error: any) {
        console.log("Error fetching cart:", error.message);
      }
    }

    getCart();
  }, []);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productDataArray: ProductWithQuantity[] = await Promise.all(
          cart.items.map(async (item) => {
            const response = await axios.post("/api/items/getitem", { _id: item.product_id });
            console.log("Fetched product data:", response.data); // Log each fetched product data
            return { ...response.data, quantity: item.quantity };
          })
        );
        console.log("Product Data with Quantity:", productDataArray); // Debugging log
        setProductData(productDataArray);
      } catch (error: any) {
        console.log("Error fetching product data:", error.message);
      }
    }

    if (cart.items && cart.items.length > 0) {
      fetchProductData();
    }
  }, [cart]);

  const onAddItem = async (id: string) => {
    try {
      const quantity = 1;
      const response = await axios.post("/api/cart/additem", { _id: id, quantity });
      console.log("Item added successfully:", response.data);
    } catch (error: any) {
      console.log("Error adding item:", error.message);
    }
  }
  
  const onDeleteItem = async (id: string) => {
    try {
      const quantity = 1;
      const response = await axios.post("/api/cart/deleteitem", { _id: id, quantity });
      console.log("Item deleted successfully:", response.data);
    } catch (error: any) {
      console.log("Error adding item:", error.message);
    }
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Your Cart</p>
        </div>
        <div className="flex gap-4 bg-white px-4 py-3 justify-between">
          {productData.map((item) => (
            <div key={item._id} className="flex items-start gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal">{item.itemname}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">{item.price}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">{item.color}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">Quantity: {item.quantity}</p>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 text-[#111518]">
                  <button onClick={() => onDeleteItem(item._id)} className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">-</button>

                  <button onClick={() => onAddItem(item._id)} className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Subtotal</p>
            <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{cart.items.length} items</p>
          </div>
          <div className="shrink-0"><p className="text-[#111518] text-base font-normal leading-normal">$128.00</p></div>
        </div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#2094f3] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
