import Converter from "../_components/main/Converter";
import type { Metadata } from "next";
import { Description } from "../_components/main/Description";

export const metadata: Metadata = {
    title: 'длинны',
    description: 'Конвертер длины онлайн — мгновенное преобразование единиц измерения. Метры, футы, дюймы, километры в один клик. Удобный расчёт расстояний.'
}

export default function Length() {
    return (
        <main>
            <header className="flex justify-center m-4">
                <h1 className="text-3xl">
                    Конвертер длинны
                </h1>
            </header>
            <Converter
                nameChapter='length'
            />
            <Description/>
        </main>
    );
}