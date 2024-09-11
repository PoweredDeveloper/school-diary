/**
 * ================ D I A R Y ================
 * Script written by Istomin Mikhail
 * PoweredDeveloper <https://github.com/PoweredDeveloper>
 * Repository <https://github.com/PoweredDeveloper/school-diary>
 */

import Link from "next/link";
import localFont from 'next/font/local'
import { RxArrowRight } from "react-icons/rx";

const literata = localFont({ src: './fonts/Literata.ttf' })
const dela = localFont({ src: './fonts/DelaGothicOne.ttf' })

export default function Home() {
  return (
    <main className="flex-auto flex justify-center items-center body-bg">
      <div className="w-full h-full">
        {/* <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#525252] opacity-10 font-black text-[810px] tracking-widest">122</span> */}
        <div className="flex flex-col justify-center items-center h-full gap-4 md:gap-7 pb-7">
          <h1 className={`${literata.className} text-3xl md:text-6xl leading-normal lg:text-[80px] lg:leading-snug font-semibold text-center text-foreground`} ><span className="text-[#619AF0]">Удобный</span> и <span className="text-[#619AF0]">быстрый</span><br /> дневник с собой!</h1>
          <h5 className={`lg:font-normal font-semibold text-base lg:text-xl text-foreground tracking-[1px] lg:tracking-[4px] ${dela.className}`}>Рассписание • чат • д/з</h5>
          <Link href="/" className="accent-btn max-w-min flex justify-between items-center gap-2 md:gap-8 mt-9 md:mt-16 md:py-3 text-lg lg:text-xl">
            <span className="tracking-[5px]">Начать</span>
            <RxArrowRight className="flex md:hidden size-6" />
            <svg className="hidden md:flex" width="128" height="16" viewBox="0 0 128 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM0 9H127V7H0V9Z" fill="black"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
