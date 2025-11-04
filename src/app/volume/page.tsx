import Converter from "../_components/main/Converter";
import type { Metadata } from "next";
import { Description } from "../_components/main/Description";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'объема',
    description: 'Конвертер объёма онлайн — мгновенная конвертация литров, галлонов, кубических метров. Точные расчёты для жидкостей и сыпучих материалов.'
}

export default function Volume() {
    return (
        <main>
            <header className="flex justify-center m-4">
                <h1 className="text-3xl">
                    Конвертер объема
                </h1>
            </header>
            <Suspense>
                <Converter
                    nameChapter="volume"
                />
            </Suspense>
            <Description/>
        </main>

    );
}