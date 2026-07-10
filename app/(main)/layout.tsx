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
    <section className="scroll-smooth">
        <div className="md:w-200 lg:w-250 xl:w-7xl flex flex-col flex-1 items-left bg-white my-5">
            <Navbar/>
              <a className="fixed bottom-10 right-10 hover:cursor-pointer
                               bg-white text-black py-2 px-3 rounded-4xl border border-black shadow-2xl"
                 href="#top">˄</a>
              {children}
            <Footer/>
        </div>
    </section>
  );
}
