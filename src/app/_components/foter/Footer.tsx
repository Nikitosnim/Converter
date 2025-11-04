export default function Footer() {
    return (<footer className=" w-full h-full p-2 bg-green-900 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4">

        <div className="w-70 m-1.5 flex flex-col">
            <h2 className="text-2xl text-gray-200">Конвертация валют</h2>
            <a
                href={"/currencies?name1=Российский+рубль&name2=Доллар+США"}
                className="text-gray-200"
            >
                Российский рубль в Доллар США
            </a>

            <a
                href={"/currencies?name1=Доллар+США&name2=Российский+рубль"}
                className="text-gray-200"
            >
                Доллар США в Российский рубль
            </a>

            <a
                href={"/currencies?name1=Фунт+стерлингов&name2=Российский+рубль"}
                className="text-gray-200"
            >
                Фунт стерлингов в Российский рубль
            </a>

            <a
                href={"/currencies?name1=Российский+рубль&name2=Фунт+стерлингов"}
                className="text-gray-200"
            >
                Российский рубль в Фунт стерлингов
            </a>

            <a
                href={"/currencies?name1=Евро&name2=Российский+рубль"}
                className="text-gray-200"
            >
                Евро в Российский рубль
            </a>
        </div>

        <div className="w-70 m-1.5 flex flex-col ">
            <h2 className="text-2xl text-gray-200">Конвертация длины</h2>
            <a
                href={"/length?name1=Сантиметр&name2=Метр"}
                className="text-gray-200"
            >
                Сантиметры в Метры
            </a>

            <a
                href={"/length?name1=Километр&name2=Метр"}
                className="text-gray-200"
            >
                Километры в Метры
            </a>

            <a
                href={"/length?name1=Дюйм&name2=Сантиметр"}
                className="text-gray-200"
            >
                Дюймы в Сантиметры
            </a>

            <a
                href={"/length?name1=Километр&name2=Миля+%28Американская%29"}
                className="text-gray-200"
            >
                Километров в Миле (Американская)
            </a>

            <a
                href={"/length?name1=Километр&name2=Миля+%28Морская%29"}
                className="text-gray-200"
            >
                Километров в Миле (Морская)
            </a>
        </div>

        <div className="w-70 m-1.5 flex flex-col ">
            <h2 className="text-2xl text-gray-200">Конвертация объема</h2>
            <a
                href={"/volume?name1=Миллилитр&name2=Литр"}
                className="text-gray-200"
            >
                Миллилитры в Литры
            </a>

            <a
                href={"/volume?name1=Литр&name2=Кубический+метр+%28м³%29"}
                className="text-gray-200"
            >
                Литры в Кубический метр
            </a>

            <a
                href={"/volume?name1=Баррель&name2=Литр"}
                className="text-gray-200"
            >
                Баррель в Литр
            </a>

            {/* <Link
                href={{
                    pathname: "/volume",
                    query: {
                        name1: 'рубли',
                        name2: 'Фунт стерлингов'
                    }
                }}
                className="text-gray-200"
            >
                сантиметры в сантиметры кубические
            </Link>

            <Link
                href={{
                    pathname: "/volume",
                    query: {
                        name1: 'Евро',
                        name2: 'Российский рубль'
                    }
                }}
                className="text-gray-200"
            >
                метры кубические в метры
            </Link> */}
        </div>

        <div className="w-70 m-1.5 flex flex-col ">
            <h2 className="text-2xl text-gray-200">Конвертация массы</h2>
            <a
                href={"/weight?name1=Грамм&name2=Килограмм"}
                className="text-gray-200"
            >
                Граммы в Килограммы
            </a>

            <a
                href={"/weight?name1=Миллиграмм&name2=Грамм"}
                className="text-gray-200"
            >
                Миллиграммы в Граммы
            </a>

            <a
                href={"/weight?name1=Тонна&name2=Килограмм"}
                className="text-gray-200"
            >
                Тонны в Килограммы
            </a>

            <a
                href={"/weight?name1=Унция&name2=Грамм"}
                className="text-gray-200"
            >
                Унция в Граммах
            </a>

            <a
                href={"/weight?name1=Грамм&name2=Карат"}
                className="text-gray-200"
            >
                Грамм в Караты
            </a>
        </div>

    </footer>


    );
}