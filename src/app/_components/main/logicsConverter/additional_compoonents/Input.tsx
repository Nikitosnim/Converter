"use client"
import { TypePropsInput } from "../types"
import { useState } from "react"
import InputDropdowns from "./InputDropdowns"

export default function Input({ text, keyData, name, setName }: TypePropsInput) {
    const [isOpen, setIsOpen] = useState<boolean>()

    const listenerName = (value: string): undefined => {
        setName(value)
    }


    const handleFocus = () => {
        setIsOpen(true)
    }

    const setOpen = (bool: boolean) => {
        setIsOpen(bool)
    }

    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 250)
    }


    return <>
        <div className="w-[93%] m-3">
            <input
                value={name}
                className="w-full border-0 border-b-1 border-gray-400 focus:outline-none focus:border-green-700 focus:border-b-2"
                type="text"
                placeholder={`${text}`}
                onChange={(event) => {

                    setName(event.target.value)
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
        <div className="relative">
            {
                isOpen && <InputDropdowns
                    keyData={keyData}
                    name={name}
                    listenerName={listenerName}
                    setIsOpen={setOpen}
                />
            }
        </div>
    </>
} 