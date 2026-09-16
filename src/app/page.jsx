"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <main className="w-full max-w-[1200px] min-h-screen mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {!menuOuvert ? (
        <div className="flex flex-col items-center justify-center gap-4 max-h-[80vh]">
          <img
            className="w-[70%] max-w-[280px] md:w-[80%] md:max-w-none mx-auto p-8 animate-pulse cursor-pointer"
            onClick={() => setMenuOuvert(true)}
            src="/medias/Logo_Top_Flop.png"
            alt="Logo Top Flop"
          />

          <p className="text-sm text-gray-500">
            Appuyez pour commencer
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg w-full md:w-1/2 max-h-[80vh] p-8">
          <img
            className="w-[70%] max-w-[280px] mx-auto"
            src="/medias/Logo_Top_Flop.png"
            alt="Logo Top Flop"
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <Link
              className="px-6 py-3 text-black rounded-xl font-semibold hover:bg-green-500 transition"
              href="/creer-salon"
            >
              Créer un salon
            </Link>

            <Link
              className="px-6 py-3 text-black rounded-xl font-semibold hover:bg-red-500 transition"
              href="/rejoindre-salon"
            >
              Rejoindre un salon
            </Link>
          </div>
        </div>
      )}
    </main>
  );

}
