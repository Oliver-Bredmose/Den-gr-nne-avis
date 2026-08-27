import { NavLink } from 'react-router-dom'
import style from './KategorierNav.module.scss'

const kategorierNav = ['Camping', 'Elektronik', 'have-og-byg', 'toej-og-mode', 'cykler', 'biler', 'hobby', 'mobil-og-telefoni', 'musik-instrumenter', 'billede-og-lyd', 'scootere-og-knallerter', 'boeger-og-blade', 'diverse', ]

export function KategorierNav() {
    return (
        <nav className={style.KategorierStyle} aria-label="Kategorier">
            <h1>Alle Kategorier</h1>
            <ul>
                {kategorierNav.map(kategori => (
                    <li key={kategori}>
                        <NavLink className={({isActive}) => isActive ? style.Active : ""} to={`/kategori/${kategori.toLowerCase()}`}>
                            {kategori}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
