/**
 * ================ D I A R Y ================
 * Script written by Istomin Mikhail
 * PoweredDeveloper <https://github.com/PoweredDeveloper>
 * Repository <https://github.com/PoweredDeveloper/school-diary>
 */

'use client'

import React, { useState } from 'react';

// Nextjs
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// HeadlessUI
import { Dialog, DialogPanel } from '@headlessui/react';

// Images & Icons
import diaryLogo from '@/app/assets/logo.svg';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

type HeaderLinkType = {
    title: string,
    link: string
}

const headerLinks: HeaderLinkType[] = [
    {
        title: "Расписание",
        link: '/schedule'
    },
    {
        title: "Домашнее Задание",
        link: '/homework'
    },
    {
        title: "Чат",
        link: '/chat'
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <header className='flex-initial'>
            <nav className='p-8 lg:px-16 lg:py-12 flex justify-between items-center mx-auto'>
                <Link href='/' className='hover:cursor-pointer' ><Image className='text-foreground h-8' src={diaryLogo} alt="School Diary" /></Link>
                <ul className='hidden gap-24 lg:flex'>
                    {headerLinks.map((link: HeaderLinkType, index: number) => (
                        <li key={index} className={`underline-btn text-xl text-foreground font-semibold no-underline transition-colors ${link.link == pathname && "after:scale-x-[1]"}`}><Link href={link.link}>{link.title}</Link></li>
                    ))}
                </ul>
                <Link href='/signin' className='accent-btn hidden lg:flex' >Вход</Link>
                <button className='flex lg:hidden text-foreground' onClick={() => setMobileMenuOpen(true)}>
                    <RxHamburgerMenu className='w-7 h-7' />
                </button>
            </nav>
            <Dialog
                as='div'
                className='lg:hidden'
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <DialogPanel className='fixed right-0 w-full inset-y-0 bg-background md:border-l-[1px] border-foreground sm:max-w-sm overflow-y-auto' >
                    <div className="flex items-center justify-between p-8">
                        <Link href='/' className='hover:cursor-pointer' ><Image className='text-foreground h-8 md:h-6' src={diaryLogo} alt="School Diary" /></Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <RxCross2 className="h-6 w-6 text-foreground" />
                        </button>
                    </div>
                    <div className='flow-root'>
                        <div className='flex flex-col gap-5 mx-8 py-8 border-b-[1px] border-b-foreground'>
                            {headerLinks.map((link: HeaderLinkType, index: number) => (
                                <Link key={index} href={link.link} className={`text-foreground font-semibold text-2xl ${link.link == pathname && 'underline'}`}>{link.title.toUpperCase()}</Link>
                            ))}
                        </div>
                        <div className='p-8 text-foreground'>
                            <button>Вход</button>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}