import { NavLink } from 'react-router-dom'
import style from './Kategorier.module.scss'

const kategorier = ['Camping', 'Elektronik', 'have-og-byg', 'toej-og-mode', 'cykler', 'biler', 'hobby', 'mobil-og-telefoni', 'musik-instrumenter', 'billede-og-lyd', 'scootere-og-knallerter', 'boeger-og-blade', 'diverse', ]

export function Kategorier() {
    return (
        <nav className={style.KategorierStyle} aria-label="Kategorier">
            <ul>
                {kategorier.map(kategori => (
                    <li key={kategori}>
                        <NavLink to={`/kategori/${kategori.toLowerCase()}`}>
                            {kategori}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
