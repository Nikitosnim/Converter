import {
    ApiResponse,
    TypeMeasurementConverter,
    TypeNameChapter,
    ValyeOf,
    currenciesUnit,
} from "./types";

// получение курса валют
class GetSortDataCurrencies {
    private _apiUrl = "https://www.cbr-xml-daily.ru/daily_json.js"
    protected _currencies: currenciesUnit | undefined = undefined;

    private sortData(res: ApiResponse): currenciesUnit {
        const objCurr: currenciesUnit = {"Российский рубль": 1}

        for (const key in res.Valute) {
            objCurr[res.Valute[key]['Name']] = res.Valute[key]['Value'] / res.Valute[key]['Nominal']
        }
        return objCurr
    }

    protected async getData() {
        try {
            const res = await fetch(this._apiUrl)
            if (!res.ok) {
                throw new Error('данные не получены')
            }
            const objRes = await res.json()
            this._currencies = this.sortData(objRes)
        } catch (error) {
            console.log('ошибка в получении данных', error);

        }
    }
}

// основной класс конвертера
export class MeasurementConverter extends GetSortDataCurrencies implements TypeMeasurementConverter {
    private _measurements: Record<Exclude<TypeNameChapter, 'currencies'>, Record<string, number>>;
    private _name1: string | undefined
    private _name2: string | undefined

    constructor() {
        super()
        this._measurements = {
            length: {
                "Миллиметр": 1,
                "Сантиметр": 10,
                "Метр": 1000,
                "Километр": 1000000,
                "Гектометр": 100000,
                "Декаметр": 10000,
                "Дециметр": 100,
                "Микрометр": 0.001,
                "Нанометр": 0.000001,
                "Пикометр": 0.000000001,
                "Миля (Американская)": 1609344,
                "Миля (Морская)": 1852000,
                "Ярд": 914.4,
                "Фут": 304.8,
                "Дюйм": 25.4,
                "Чейн": 20116.8,
                "Ферст (furlong)": 201168,
                "Верста": 1066800,
                "Сажень": 2133.6,
                "Аршин": 711.2,
                "Пядь": 178,
            } as const,
            volume: {
                "Миллилитр": 0.001,
                "Центилитр": 0.01,
                "Децилитр": 0.1,
                "Литр": 1,
                "Декалитр": 10,
                "Гектолитр": 100,
                "Килолитр": 1000,
                "Баррель": 0.00628981,
                "Кубический метр (м³)": 1000,
                "Кубический сантиметр (см³)": 0.001,
                "Кубический миллиметр (мм³)": 0.000001,
                "Жидкая унция (fl oz)": 0.02957,
                "Пинта (США)": 0.473,
                "Кварта (США)": 0.946,
                "Галлон (США)": 3.785,
                "Пинта (Великобритания)": 0.568,
                "Кварта (Великобритания)": 1.136,
                "Галлон (Великобритания)": 4.546,
            } as const,
            weight: {
                "Миллиграмм": 0.000001,
                "Грамм": 0.001,
                "Децограмм": 0.01,
                "Килограмм": 1,
                "Центнер": 100,
                "Тонна": 1000,
                "Гран": 0.0000648,
                "Драхма": 0.001772,
                "Унция": 0.0283495,
                "Фунт": 0.453592,
                "Стоун": 6.35029,
                "Кентнер (американский центнер)": 45.3592,
                "Американская тонна": 907.185,
                "Британская (длинная) тонна": 1016.05,
                "Золотник": 0.00426575,
                "Русский фунт": 0.4095,
                "Пуд": 16.38,
                "Карат": 0.0002,
            } as const,
        } as const
    }

    // гетеры на получение объектов 
    public get curren(): currenciesUnit | undefined {
        return this._currencies
    }

    public get availableLength(): ValyeOf<typeof this._measurements> {
        return this._measurements.length
    }

    public get availableVolume(): ValyeOf<typeof this._measurements> {
        return this._measurements.volume
    }

    public get availableWeight(): ValyeOf<typeof this._measurements> {
        return this._measurements.weight
    }

    public async init(): Promise<currenciesUnit | undefined> {
        await this.getData()
        return this.curren
    }

    // гетеры на получение текущих name
    public get name1(): string | undefined {
        return this._name1
    }

    public get name2(): string | undefined {
        return this._name2
    }

// логика конвертера
    public convert(unitEntrance: string, unitExite: string, quantity: number): number {
        if (this._measurements?.length[unitExite]) {
            return quantity * this._measurements.length[unitEntrance] / this._measurements.length[unitExite]

        } else if (this._measurements?.volume[unitExite]) {
            return quantity * this._measurements.volume[unitEntrance] / this._measurements.volume[unitExite]

        } else if (this._measurements?.weight[unitExite]) {
            return quantity * this._measurements.weight[unitEntrance] / this._measurements.weight[unitExite]

        } else if (this._currencies?.[unitEntrance]) {
            return quantity * this._currencies?.[unitEntrance] / this._currencies?.[unitExite]

        } else {            
            console.log('Ошибка к классе конвертера');
            return 1
        }
    }
}

