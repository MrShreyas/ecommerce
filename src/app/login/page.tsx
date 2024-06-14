"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const router = useRouter();

    const [user, setUser] = useState({
        
        password: "",
        username: "",
      });

    const onLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", user)
            console.log(response);
            router.push("/")
        } catch (error: any) {
            console.log("login failed", error.message);
        }
        
    }


    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] items-center  py-5 max-w-[960px] flex-1">
                        <h1 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Welcome back to Ecommerce</h1>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Username</p>
                            <input
                            placeholder="Username"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d1dce6] bg-[#f8fafb] focus:border-[#d1dce6] h-14 placeholder:text-[#507695] p-[15px] text-base font-normal leading-normal"
                            type="text"
                            id="username"
                            value={user.username}
                            onChange={(e) => setUser({...user,username: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Password</p>
                            <input
                            placeholder="Password"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d1dce6] bg-[#f8fafb] focus:border-[#d1dce6] h-14 placeholder:text-[#507695] p-[15px] text-base font-normal leading-normal"
                            type="text"
                            id="password"
                            value={user.password}
                            onChange={(e) => setUser({...user,password: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                        <button onClick={onLogin}
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center  overflow-hidden rounded-xl h-10 px-4 bg-[#2c90e2] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Log in</span>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}