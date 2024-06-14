"use client"

import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        firstname:"",
        lastname:"",
      });

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user)
            console.log(response);
            router.push("/login")
        } catch (error: any) {
            console.log("signup failed", error.message);
        }
        
    }

    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex flex-1 justify-center">
                    <div className="layout-content-container items-center flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
                        <h3 className="text-[#0e151b] tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">Create an account</h3>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">UserName</p>
                            <input
                            placeholder="UserName"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507695] p-4 text-base font-normal leading-normal"
                            type="text"
                            id="username"
                            value={user.username}
                            onChange={(e) => setUser({...user,username: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">First name</p>
                            <input
                            placeholder="FIrst Name"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507695] p-4 text-base font-normal leading-normal"
                            type="text"
                            id="firstname"
                            value={user.firstname}
                            onChange={(e) => setUser({...user,firstname: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Last name</p>
                            <input
                            placeholder="Last Name"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507695] p-4 text-base font-normal leading-normal"
                            type="text"
                            id="lastname"
                            value={user.lastname}
                            onChange={(e) => setUser({...user,lastname: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Email address</p>
                            <input
                            placeholder="Email"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507695] p-4 text-base font-normal leading-normal"
                            type="text"
                            id="email"
                            value={user.email}
                            onChange={(e) => setUser({...user,email: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">Password</p>
                            <input
                            placeholder="**********"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-14 placeholder:text-[#507695] p-4 text-base font-normal leading-normal"
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={(e) => setUser({...user,password: e.target.value})}
                            />
                        </label>
                        </div>
                        <div className="px-4">
                        <label className="flex gap-x-3 py-3 flex-row">
                            <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-[#d1dce6] border-2 bg-transparent text-[#2c90e2] checked:bg-[#2c90e2] checked:border-[#2c90e2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1dce6] focus:outline-none"
                            />
                            <p className="text-[#0e151b] text-base font-normal leading-normal">Yes, I would like to receive marketing email from this company.</p>
                        </label>
                        </div>
                        <div className="flex px-4 py-3">
                        <button onClick={onSignup}
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#2c90e2] text-[#f8fafb] text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Sign up</span>
                        </button>
                        </div>
                    </div>
                    </div>
                    <footer className="flex justify-center">
                    <div className="flex max-w-[960px] flex-1 flex-col">
                        <p className="text-[#507695] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">You are also agreeing to our Terms of Service and Privacy Policy.</p>
                        <Link href="/login" className="text-[#507695] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Already have an account?</Link>
                    </div>
                    </footer>
                </div>
            </div>
        </>
    )
}