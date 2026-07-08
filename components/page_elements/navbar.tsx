'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname()
    const pathName = path.split('/')

    return (
        <nav className="min-w-full bg-teal-900 p-4
                        text-2xl">
            <Link className="hover:border-b hover:border-white p-1" href="/">{'< HOME PAGE'}</Link>
        </nav>
    )
}