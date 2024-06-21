"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const router = useRouter();

    const [user, setUser] = useState({
        
        password: "",
        username: "",
      });

    const onLogin = async () => {
        if (user.password!="" && user.username!="") {
            try {
                const response = await axios.post("/api/users/login", user)
                console.log("login succesfull",response);
                router.push("/")
            } catch (error: any) {
                console.log("login failed", error.message);
            }
        }
        else{
            alert("Please fill all the fields");
        }
        
    }


    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex  justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] items-center gap-6 py-5 max-w-[960px] ">
                        <h1 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Welcome back to Ecommerce</h1>
                        <div className="flex max-w-[480px]  flex-wrap items-start gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 ">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Username</p>
                            <input required
                            placeholder="Username"
                            className="form-input flex w-full min-w-0  resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d1dce6] bg-[#f8fafb] focus:border-[#d1dce6] h-14 placeholder:text-[#507695] p-[15px] text-base font-normal leading-normal"
                            type="text"
                            id="username"
                            value={user.username}
                            onChange={(e) => setUser({...user,username: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px]  flex-wrap items-start gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 ">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Password</p>
                            <input required
                            placeholder="Password"
                            className="form-input flex w-full min-w-0  resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d1dce6] bg-[#f8fafb] focus:border-[#d1dce6] h-14 placeholder:text-[#507695] p-[15px] text-base font-normal leading-normal"
                            type="text"
                            id="password"
                            value={user.password}
                            onChange={(e) => setUser({...user,password: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex px-4 py-3 items-start justify-start">
                        <button onClick={onLogin}
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center  overflow-hidden rounded-xl h-10 px-4 bg-[#2c90e2] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Log in</span>
                        </button>
                        
                        </div>
                        <h1>Don't have account? <Link className="underline text-blue-700" href="/signup">Sign Up</Link></h1>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}