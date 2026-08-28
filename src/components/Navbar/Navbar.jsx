import { NavLink } from "react-router-dom"
import Logo from '../../assets/dga-Logo.svg'
import style from '../../components/Navbar/Navbar.module.scss';
import Mail from '../../assets/Mail.png'
import Profil from '../../assets/Profiil.png'
import info from '../../assets/info.png'

export function Navbar() {
return(
    <nav className={style.Navstyle}>

        <figure>
            <NavLink to ={"/"}><img src={Logo} alt="dga_logo"></img></NavLink>
        </figure>
        <ul>
            <div className={style.button}>
            <li>
                <NavLink to={"/OpretAnnonceSide"}>Opret Annonce</NavLink>
            </li>
            </div>
            <li>
                <img src={Mail} alt="Mails"></img>
            </li>

            <li>
                <img src={info} alt="info"></img> 
            </li>

            <li>
                <NavLink to={"/Profil"}><img src={Profil} alt="Profil" /></NavLink>
            </li>
        </ul>
    </nav>

)
}