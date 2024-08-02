import styles from './NavPanel.module.scss'
import { NavLink } from '../../ui';
import { logo } from '../../../assets';
import { useEffect, useState } from 'react';
import { ILink } from '../../types/LinkTypes';



const NavPanel = () => {
    const [path, setPath] = useState("")
    useEffect(() => {
        const allpath = window.location.href.split("/")
        setPath(allpath[allpath.length - 1])
    }, [window.location.href])
    const links: ILink[] = [
        {
            path: "/",
            title: "Главная",
            image: "",
            isActive: path === ""
        },
        {
            path: "/main",
            title: "Воронка",
            image: "",
            isActive: path === "main"
        }
    ]


    return (
        <>
        <nav className={styles.NavPanel}>
            <img className={styles.Logo} src={logo} alt="" />
            {links.map((link: ILink, index) => {
                return(
                    <NavLink
                        {...link}
                        key={index}
                    />
                )
            })}
        </nav>
        </>
    );
}
 
export default NavPanel;