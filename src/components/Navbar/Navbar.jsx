import { NavLink } from "react-router-dom"
import Logo from '../../assets/dga-Logo.svg'
import style from '../../components/Navbar/Navbar.module.scss';
import Mail from '../../assets/Mail.png'
import Profil from '../../assets/Profiil.png'

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
                <NavLink to={"/ProfilAnnonceSide"}><img src={Mail} alt="Mails" /></NavLink>
    
            </li>
            <li>
                <NavLink to={"/Profil"}><img src={Profil} alt="Profil" /></NavLink>
            </li>
        </ul>
    </nav>

)
}