import Converter from "../_components/main/Converter";
import type { Metadata } from "next";
import { Description } from "../_components/main/Description";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
    title: 'веса',
    description: 'Калькулятор веса — быстрый перевод единиц измерения. Граммы, килограммы, тонны в один клик. Удобный расчёт массы.'
}

export default function Weight() {
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


        <main>
            <header className="flex justify-center m-4">
                <h1 className="text-3xl">
                    Конвертер массы
                </h1>
            </header>
            <Suspense>
                <Converter
                    nameChapter="weight"
                />
            </Suspense>
            <Description />
        </main>
    </>
    );
}