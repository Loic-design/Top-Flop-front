"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <main className="w-full max-w-[1200px] h-[900px] mx-auto flex items-center justify-center overflow-hidden">
      {!menuOuvert ? <img className="" onClick={() => setMenuOuvert(true)} src="/medias/Logo_Top_Flop.png" alt="Logo" /> :
        <div className=" bg-white rounded-2xl shadow-lg">
          <img className="w-250" src="/medias/Logo_Top_Flop.png" alt="" />
          <div className="flex justify-center gap-20 mb-20">
            <Link className="px-6 py-3  text-black rounded-xl font-semibold hover:bg-green-500 transition"
              href="/creer-salon"> Créer un salon</Link>
            <Link className="px-6 py-3  text-black rounded-xl font-semibold hover:bg-red-500 transition"
              href="/rejoindre-salon"> Rejoindre un salon </Link>
          </div>
        </div>}

    </main>
  );

}
