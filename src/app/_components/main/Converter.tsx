"use client"
import {
    useEffect,
    useRef,
    useState,
} from "react";
import { MeasurementConverter } from "./logicsConverter/funcConverter";
import Input from "./logicsConverter/additional_compoonents/Input";
import {
    currenciesUnit,
    TypePropsConverter
} from "./logicsConverter/types";
import { useSearchParams } from "next/navigation";
import { FiRefreshCw } from "react-icons/fi";

const convert = new MeasurementConverter()

export default function Converter({ nameChapter }: TypePropsConverter) {
    const [data, setData] = useState<currenciesUnit | undefined>()
    const [value1, setValue1] = useState<string>('')
    const [name1, setName1] = useState<string>('')
    const [name2, setName2] = useState<string>('')

    // получение name из урла
    const searchParams = useSearchParams();
    const query1 = searchParams.get('name1')
    const query2 = searchParams.get('name2')
    const ref = useRef(true)

    // проверка что в урл что то есть, проверка на значения, только потом присвоение стейтам
    if (ref.current) {
        ref.current = false
        if (((query1 !== null && query1 !== name1) || (query2 !== null && query2 !== name2))) {
            if (query1 && query2) {
                setName1(query1)
                setName2(query2)
            }
        }
    }


    const listenerName1 = (value: string): undefined => {
        setName1(value)
    }

    const listenerName2 = (value: string): undefined => {
        setName2(value)
    }

    // функцтя проверяет заполнение name
    const examConvertElem = () => {
        if (data?.[name1] && data?.[name2]) {
            return convert.convert(name1, name2, Number(value1))
        } else {
            return 0
        }
    }

    useEffect(() => {
        if (nameChapter === 'currencies') {
            convert.init().then(res => setData(res))

        } else if (nameChapter === 'length') {
            setData(convert.availableLength)

        } else if (nameChapter === 'volume') {
            setData(convert.availableVolume)

        } else if (nameChapter === 'weight') {
            setData(convert.availableWeight)

        }
    }, [nameChapter])
    return (
    <section className="w-full flex justify-center">
        <form className="w-full max-w-256 flex flex-col justify-center items-center m-3 lg:flex-row">

            {/* первый блок */}
            <div className="w-[70%] flex flex-col m-3">
                <Input
                    text={'что'}
                    keyData={data ? Object.keys(data) : []}
                    name={name1}
                    setName={listenerName1}
                />
                <input
                    type="number"
                    name="quantity"
                    value={value1}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:border-green-700 focus:border-2 block w-full p-2"
                    placeholder="Начните вводить значение"
                    required
                    onChange={(event) => {
                        if (Number(event.target.value) || event.target.value === '') {
                            setValue1(event.target.value)
                        }
                    }}
                />
            </div>


            {/* кнопка для смены сторон */}
            <div
                className="flex items-center justify-center m-3 w-13 h-13 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl lg:w-20"
                onClick={() => {
                    setName1(name2)
                    setName2(name1)
                }}
            >
                <FiRefreshCw
                    color="#99a1af "
                    size={'30'}
                />
            </div>

            {/* второй блок */}
            <div className="w-[70%] flex flex-col m-3">
                <Input
                    text={'во что'}
                    keyData={data ? Object.keys(data) : []}
                    name={name2}
                    setName={listenerName2}
                />
                <input
                    type="number"
                    name="result_calculations"
                    value={Number(examConvertElem().toFixed(6))}
                    className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    readOnly
                />
            </div>
        </form>
    </section>
    );
}
