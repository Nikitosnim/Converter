import Converter from "../_components/main/Converter";
import type { Metadata } from "next";
import { Description } from "../_components/main/Description";

export const metadata: Metadata = {
    title: 'веса',
    description: 'Калькулятор веса — быстрый перевод единиц измерения. Граммы, килограммы, тонны в один клик. Удобный расчёт массы.'
}

export default function Weight() {
    return (
        <>
            <header className="flex justify-center m-4">
                <h1 className="text-3xl">
                    Конвертер массы
                </h1>
            </header>
            <Converter
                nameChapter="weight"
            />
            <Description/>
        </>
    );
}