import Link from "next/link";

export function Navbar() {
    return (
        <nav className="relative hidden sm:block">
            <Link href="/currencies" className="m-4 p-3 text-2xl hover:bg-green-600 transform-hover corner-cuts">Валюты</Link>
            <Link href="/length" className="m-4 p-3 text-2xl hover:bg-green-600 transform-hover corner-cuts">Длина</Link>
            <Link href="/volume" className="m-4 p-3 text-2xl hover:bg-green-600 transform-hover corner-cuts">Объём</Link>
            <Link href="/weight" className="m-4 p-3 text-2xl hover:bg-green-600 transform-hover corner-cuts">Масса</Link>
    </nav>
    )
}
