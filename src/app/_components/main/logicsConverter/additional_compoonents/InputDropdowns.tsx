import { TypePropsInputDropdowns } from "../types";

export default function InputDropdowns({ keyData, name, listenerName }: TypePropsInputDropdowns) {

    const filterKey = keyData.filter(key => key.toLowerCase().includes(name))

    if (keyData.length === 0) {
        return <div
            id="dropdownSearch"
            className="absolute z-10  bg-white rounded-lg shadow-sm w-[100%] ">
            <ul
                className=" h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                <li className="flex items-center ps-2 rounded-sm hover:bg-green-700">
                    <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">
                        нет данных
                    </label>
                </li>
            </ul>
        </div>
    }

    if (filterKey.length === 0) {
        return <div
            id="dropdownSearch"
            className="absolute z-10  bg-white rounded-lg shadow-sm w-[100%] ">
            <ul
                className=" h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                <li className="flex items-center ps-2 rounded-sm hover:bg-green-700">
                    <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">
                        совпадений не найдено
                    </label>
                </li>
            </ul>
        </div>
    }

    const children: React.ReactNode[] = filterKey.map((item, index): React.ReactNode => (
        (
            <li key={index} className="flex items-center ps-2 rounded-sm hover:bg-green-700">
                <label
                    onClick={() => listenerName(item)}
                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">
                    {item}
                </label>
            </li>
        )
    ));

    return <>
        <div
            id="dropdownSearch"
            className="absolute z-10  bg-white rounded-lg shadow-sm w-[100%] ">
            <ul className=" h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                {children}
            </ul>
        </div>
    </>
}