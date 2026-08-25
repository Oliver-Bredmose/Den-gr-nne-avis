import { NavLink } from "react-router"
import Logo from '../../assets/dga-Logo.svg'
import style from '../../components/Navbar/Navbar.module.scss';

export function Navbar() {
return(
    <nav className={style.Navstyle}>

        <figure>
            <img src={Logo} alt="dga_logo"></img>
        </figure>
        <ul>
            <li>
                <NavLink to={"/OpretAnnonceSide"}>Opret Annonce</NavLink>
            </li>
            <li>
                <NavLink to={"/estates"}>Boligere</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
            <li>
                <NavLink to={"/Profil"}>Profil</NavLink>
            </li>
        </ul>
    </nav>

)
}