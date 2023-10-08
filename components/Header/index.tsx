"use client"

// Import Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'



export default function Header() {

    const pathname = usePathname()

    const links = [
        {
            title: 'Ana Sayfa',
            href: '/'
        },
        {
            title: 'Antrenman',
            href: '/workout'
        },
        {
            title: 'Diyet',
            href: '/diet'
        },
    ]


    return (
        <header id={styles.header}>
            <div id={styles.header__container} className={`container `}>
                <Link className={styles.brand} href="/">Gym Kit</Link>
                <ul className={styles.links}>
                    {links.map((link, index) => (
                        <li key={index} className={`${styles.link} ${link.href === pathname && styles.active}`}>
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}

                </ul>
            </div>
        </header>
    )
}
