"use client"
import { useState } from 'react';
import Link from "next/link";

export default function HamburgerNavbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className='relative z-400 sm:hidden'>
            <svg
                className={`ham hamRotate ham4 ${isActive ? 'active' : ''}`}
                viewBox="0 0 100 100"
                width="40"
                onClick={() => setIsActive(!isActive)}
            >
                <path className="line top" d="m 70,33 h-40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                <path className="line middle" d="m 70,50 h -40" />
                <path className="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
            <div className={`fixed z-400 top-15 right-0  w-full h-full bg-white bg-opacity-95 flex flex-col  space-y-8 transition-transform duration-300 ease-in-out
                ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link href="/currencies" onClick={() => setIsActive(false)} className="m-0 p-3 text-2xl hover:bg-green-600">Валюты</Link>
                <Link href="/length" onClick={() => setIsActive(false)} className="m-0 p-3 text-2xl hover:bg-green-600">Длина</Link>
                <Link href="/volume" onClick={() => setIsActive(false)} className="m-0 p-3 text-2xl hover:bg-green-600">Объём</Link>
                <Link href="/weight" onClick={() => setIsActive(false)} className="m-0 p-3 text-2xl hover:bg-green-600">Масса</Link>
            </div>
        </nav>
    );
}
