import { BsCurrencyExchange } from "react-icons/bs"
import { CiRuler } from "react-icons/ci";
import { LuPaintBucket } from "react-icons/lu";
import { GiWeight } from "react-icons/gi";
import Link from "next/link";

export default function Home() {
  return (<main className="w-full">
    <section className="w-full">
      
      <div className="w-[80%] bg-green-400">
        <Link href="/urrencies" className="m-0 p-3 text-2xl hover:bg-green-600">
          <BsCurrencyExchange size={"100%"} />

        </Link>
      </div>


      <Link href="/length" className="m-0 p-3 text-2xl hover:bg-green-600">
        <CiRuler size={100} />
      </Link>

      <Link href="/volume" className="m-0 p-3 text-2xl hover:bg-green-600">
        <LuPaintBucket size={100} />
      </Link>

      <Link href="/weight" className="m-0 p-3 text-2xl hover:bg-green-600">
        <GiWeight size={100} />
      </Link>

    </section>
  </main>
  );
}
