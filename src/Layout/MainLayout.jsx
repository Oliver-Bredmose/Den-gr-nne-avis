import { Outlet } from "react-router-dom";
import { KategorierNav } from "../components/Kategorier/KategorierNav";
import style from "./MainLayout.module.scss"

export default function MainLayout() {
    return (
        <div className={style.Layout}>
            <KategorierNav />
            <Outlet />
        </div>
    )
}