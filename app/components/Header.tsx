/**
 * ================ D I A R Y ================
 * Script written by Istomin Mikhail
 * PoweredDeveloper <https://github.com/PoweredDeveloper>
 * Repository <https://github.com/PoweredDeveloper/school-diary>
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

// Images
import diaryLogo from '@/app/assets/logo.svg';

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
        title: "Домашнее задание",
        link: '/homework'
    },
    {
        title: "Чат",
        link: '/chat'
    },
]

export default function Header() {
    return (
        <header className='flex-initial p-10 flex justify-between items-center'>
            <Image className='text-foreground' src={diaryLogo} alt="School Diary" />
            <ul className='flex gap-24'>
                {headerLinks.map((link: HeaderLinkType, index: number) => (
                    <li key={index} className='text-2xl text-foreground font-semibold no-underline border-0 border-foreground hover:border-2'><Link href={link.link}>{link.title}</Link></li>
                ))}
            </ul>
            <Link href='/signin' className='accent-btn' >Вход</Link>
        </header>
    );
}