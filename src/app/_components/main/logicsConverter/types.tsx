export type ValyeOf<T> = T[keyof T]

export type TypeNameChapter = 'currencies' | 'length' | 'volume' | 'weight'

export type LengthUnit =
    | "Миллиметр"
    | "Сантиметр"
    | "Метр"
    | "Километр"
    | "Гектометр"
    | "Декаметр"
    | "Дециметр"
    | "Микрометр"
    | "Нанометр"
    | "Пикометр"
    | "Миля (Американская)"
    | "Миля (Морская)"
    | "Ярд"
    | "Фут"
    | "Дюйм"
    | "Чейн"
    | "Ферст (furlong)"
    | "Верста"
    | "Сажень"
    | "Аршин"
    | "Пядь";

export type VolumeUnit =
    | "Миллилитр"
    | "Центилитр"
    | "Децилитр"
    | "Литр"
    | "Декалитр"
    | "Гектолитр"
    | "Килолитр"
    | "Кубический метр (м³)"
    | "Кубический сантиметр (см³)"
    | "Кубический миллиметр (мм³)"
    | "Жидкая унция (fl oz)"
    | "Пинта (США)"
    | "Кварта (США)"
    | "Галлон (США)"
    | "Пинта (Великобритания)"
    | "Кварта (Великобритания)"
    | "Галлон (Великобритания)";

export type WeightUnit =
    | "Миллиграмм"
    | "Грамм"
    | "Децограмм"
    | "Килограмм"
    | "Центнер"
    | "Тонна"
    | "Гран"
    | "Драхма"
    | "Унция"
    | "Фунт"
    | "Стоун"
    | "Кентнер (американский центнер)"
    | "Американская тонна"
    | "Британская (длинная) тонна"
    | "Золотник"
    | "Русский фунт"
    | "Пуд";

export type GeneralUnit =  currenciesUnit | LengthUnit | VolumeUnit | WeightUnit

export type ApiResponse = {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: {
        [key: string]: currenciesUnit;
    }
}

export type currenciesUnit = {
    [key: string]: number
}

// типы класса конвертера
export type TypeMeasurementConverter = {
    convert(unitEntrance: string, unitExite: string, quantity: number): number | void;
}

// типы пропсов
export type TypePropsConverter = {    
    nameChapter: string
}

export type TypePropsInput = {
    text: string
    keyData: string[]
    name: string
    setName: (arg: string) => undefined
}

export type TypePropsInputDropdowns = {
    keyData: string[]
    name: string
    listenerName: (arg: string) => void
    setIsOpen: (arg:boolean) => void
}

// типы метадаты
export type PropsMetadata = {
    params: Promise<{name: string}>
}




