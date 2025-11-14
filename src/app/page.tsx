import { BsCurrencyExchange } from "react-icons/bs"
import { CiRuler } from "react-icons/ci";
import { LuPaintBucket } from "react-icons/lu";
import { GiWeight } from "react-icons/gi";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (<>

    <Script
      strategy="afterInteractive"
      src="https://mc.yandex.ru/metrika/tag.js?id=105325876"
    />

    {/* Инициализация метрики */}
    <Script id="yandex-metrika-init" strategy="afterInteractive">
      {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){
              if(document.scripts[j].src===r){return;}
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=105325876", "ym");

          ym(105325876, "init", {
            ssr:true,
            webvisor:true,
            clickmap:true,
            ecommerce:"dataLayer",
            accurateTrackBounce:true,
            trackLinks:true
          });
        `}
    </Script>

    {/* Google Analytics */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-NYCLR65HDS"
      strategy="afterInteractive"
      async
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NYCLR65HDS');
          `}
    </Script>

    <main className="m-7 w-[80%] flex justify-center">
      <section className="w-full max-w-400 grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 2xl:grid-cols-4 ">

        <div className="w-[80%] max-w-70 bg-green-500 rounded-4xl hover:bg-green-400 transform-hover duration-400">
          <Link title="Конвертер валют" href="/currencies" className="flex flex-col items-center m-0 p-4">
            <BsCurrencyExchange size={"70%"} />
            <h2 className="text-2xl">Конвертер валют</h2>
          </Link>
        </div>

        <div className="w-[80%] max-w-70 bg-green-500 rounded-4xl hover:bg-green-400 transform-hover duration-400">
          <Link title="Конвертер длинны" href="/length" className="flex flex-col items-center m-0 p-4">
            <CiRuler size={"70%"} />
            <h2 className="text-2xl">Конвертер длинны</h2>
          </Link>
        </div>

        <div className="w-[80%] max-w-70 bg-green-500 rounded-4xl hover:bg-green-400 transform-hover duration-400">
          <Link title="Конвертер объема" href="/volume" className="flex flex-col items-center m-0 p-4">
            <LuPaintBucket size={"70%"} />
            <h2 className="text-2xl">Конвертер объема</h2>
          </Link>
        </div>

        <div className="w-[80%] max-w-70 bg-green-500 rounded-4xl hover:bg-green-400 transform-hover duration-400">
          <Link title="Конвертер массы" href="/weight" className="flex flex-col items-center m-0 p-4">
            <GiWeight size={"70%"} />
            <h2 className="text-2xl">Конвертер массы</h2>
          </Link>
        </div>

      </section>
    </main>
    </>
  );
}
