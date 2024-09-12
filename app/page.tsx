/**
 * ================ D I A R Y ================
 * Script written by Istomin Mikhail
 * PoweredDeveloper <https://github.com/PoweredDeveloper>
 * Repository <https://github.com/PoweredDeveloper/school-diary>
 */

import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
import { Overpass } from 'next/font/google'
import longArrow from '@/app/assets/longArrow.svg'
import starIcon from '@/app/assets/star.svg'

const vetrino = localFont({ src: './fonts/Vetrino.otf' })
const overpass = Overpass({ weight: ["400", "500"], subsets: ['latin', 'cyrillic-ext'] })

export default function Home() {
  return (
    <main className="flex-auto flex justify-center items-center body-bg">
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center md:items-start lg:items-center h-full gap-9 px-11 md:gap-7 pb-7 md:mr-[25%] lg:mr-0">
          <div className="flex justify-center lg:items-center lg:justify-normal lg:gap-4 flex-row lg:flex-col">
            <h1 className={`${vetrino.className} text-5xl md:text-6xl lg:text-[100px] lg:text-center text-left text-foreground`} >
              <span className="text-accent">Удобный</span> и <span className="text-accent">быстрый</span><br />дневник с собой
            </h1>
            <Image className="lg:hidden block lg:self-auto self-end ml-3" src={starIcon} alt='|' />
          </div>
          <div className="block lg:hidden border-b-[1px] border-b-foreground w-full" />
          <Image className="hidden lg:block" src={starIcon} alt='|' />
          <h5 className={`font-normal text-center md:text-left lg:text-center text-base lg:text-xl text-foreground tracking-[1px] lg:tracking-[4px] ${overpass.className}`}>
            Дневник • расписание • чат • д/з<br />
            собраны в одном месте!
          </h5>
          <Link href="/" className="accent-btn flex justify-between items-center gap-5 md:gap-8 mt-9 md:mt-16 md:py-3 text-lg lg:text-xl">
            <span className={`${overpass.className} tracking-[5px] mt-1`}>Начать</span>
            <Image src={longArrow} alt="->" />
          </Link>
        </div>
      </div>
    </main>
  );
}
