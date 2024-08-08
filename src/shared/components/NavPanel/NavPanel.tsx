import styles from './NavPanel.module.scss'
import { NavLink } from '../../ui';
import { generator, generatorActive, home, homeActive, lead, leadActive, logo } from '../../../assets';
import { ILink } from '../../types/LinkTypes';
import { useNavigate } from 'react-router-dom';


const NavPanel = () => {
    const nav = useNavigate()
    const links: ILink[] = [
        {
            path: "/",
            title: "Главная",
            image: home,
            activeImage: homeActive,
            isActive: window.location.pathname === "/"
        },
        {
            path: "/leads",
            title: "Лиды",
            image: lead,
            activeImage: leadActive,
            isActive: window.location.pathname === "/leads"
        },
        {
            path: "/generator",
            title: "Лидогенерация",
            image: generator,
            activeImage: generatorActive,
            isActive: window.location.pathname === "/generator"
        }
    ]
    
    return (
        <>
        <nav className={styles.NavPanel}>
            <img className={styles.Logo} onClick={() => nav("/")} src={logo} alt="" />
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