import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Duechayapol",
  description: "Home of Duechayapol Projects",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        <div className="w-350 flex flex-col flex-1 items-left bg-cyan-500 my-5">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    </section>
  );
}
