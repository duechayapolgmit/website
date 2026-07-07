import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Duechayapol",
  description: "Home of Duechayapol Projects",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    console.log(children)
  return (
    <section>
        <div className="min-w-350 flex flex-col flex-1 items-center bg-cyan-500 my-5">
            <Navbar/>
            {children}
        </div>
    </section>
  );
}
