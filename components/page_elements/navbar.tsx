'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname()
    const pathName = path.split('/')

    return (
        <nav className="sticky top-0 z-50
                        min-w-full bg-teal-900 p-4
                        flex flex-col md:flex-row justify-center md:justify-between
                        text-center place-items-center md:text-left text-2xl">
            <Link className="hover:border-b hover:border-white px-1 pt-1 pb-0.5" href="/">{'< HOME PAGE'}</Link>
            <Image className="mt-1 md:justify-self-end" 
                alt="Duechayapol" src={"/logo.png"} width={250} height={20}/>
        </nav>
    )
}