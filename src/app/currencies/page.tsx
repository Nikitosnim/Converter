import Converter from "../_components/main/Converter";
import type { Metadata } from "next";
import { Description } from "../_components/main/Description";

export const metadata: Metadata = {
    title: 'валют',
    description: 'Удобный онлайн-калькулятор для конвертации валют. Точные курсы обмена, мгновенные расчёты для путешествий и бизнеса.'
}

export default function Currencies() {
    return (
        <main>
            <header className="flex justify-center m-4">
                <h1 className="text-3xl">
                    Конвертер валют
                </h1>
            </header>
            <Converter
                nameChapter="currencies"
            />
            <Description/>
        </main>
    );
}
