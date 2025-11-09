import { useEffect, useRef, useState } from "react";
import { TypePropsInputDropdowns } from "../types";

export default function InputDropdowns({ keyData, name, listenerName, setIsOpen }: TypePropsInputDropdowns) {
    const [activElem, setActiveElem] = useState(0);
    const filterKey = keyData.filter(key => key.toLowerCase().includes(name));

    // УПРАВЛЕНИЕ С КЛАВИАТУРЫ
    const listRef = useRef<HTMLUListElement>(null);
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "ArrowDown") {
                setActiveElem(prev => Math.min(prev + 1, filterKey.length - 1));
            } else if (event.key === "ArrowUp") {
                setActiveElem(prev => Math.max(prev - 1, 0));
            } else if (event.key === 'Enter') {
                if (filterKey[activElem]) {
                    listenerName(filterKey[activElem])
                    setIsOpen(false)
                }
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [filterKey, listenerName, activElem, setIsOpen]);

    useEffect(() => {
        if (!listRef.current || !itemsRef.current[activElem]) return;

        const activeItem = itemsRef.current[activElem];
        activeItem?.scrollIntoView({ block: 'nearest' });
    }, [activElem]);

    // если данные не пришли
    if (keyData.length === 0) {
        return <div
            id="dropdownSearch"
            className="absolute z-10 bg-white rounded-lg shadow-sm w-[100%]"
        >
            <ul
                className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton"
            >
                <li className="flex items-center ps-2 rounded-sm hover:bg-green-700">
                    <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm ">
                        нет данных
                    </label>
                </li>
            </ul>
        </div>
    }

    // если нету совпадений
    if (filterKey.length === 0) {
        return <div
            id="dropdownSearch"
            className="absolute z-10 bg-white rounded-lg shadow-sm w-[100%]"
        >
            <ul
                className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton"
            >
                <li className="flex items-center ps-2 rounded-sm hover:bg-green-700">
                    <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm ">
                        совпадений не найдено
                    </label>
                </li>
            </ul>
        </div>
    }

    return (
        <div
            id="dropdownSearch"
            className="absolute z-10 bg-white rounded-lg shadow-sm w-[100%]"
        >
            <ul
                ref={listRef}
                className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
                aria-labelledby="dropdownSearchButton"
            >
                {filterKey.map((item, index) => (
                    <li
                        key={index}
                        ref={el => { itemsRef.current[index] = el }}
                        className={`flex items-center ps-2 rounded-sm hover:bg-green-700 cursor-pointer ${index === activElem ? 'bg-green-700' : ''
                            }`}
                    >
                        <label
                            onClick={() => listenerName(item)}
                            className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm"
                        >
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

