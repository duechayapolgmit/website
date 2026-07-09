import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/page_elements/navbar";
import Footer from "@/components/page_elements/footer";

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
    <section className="">
        <div className="w-350 flex flex-col flex-1 items-left bg-white my-5">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    </section>
  );
}
