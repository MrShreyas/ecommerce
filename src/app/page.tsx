"use client"

import LandingPage from "./components/landing-page";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {

  const router = useRouter();

    const onLogout = async () => {
        const response = await axios.get("/api/users/logout");
        console.log(response);
        router.push("/login");
    }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <button onClick={onLogout} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e151b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">Logout</button>
      <LandingPage  ></LandingPage>
    </main>
  );
}
