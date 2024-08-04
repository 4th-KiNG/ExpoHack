import styles from './NavPanel.module.scss'
import { NavLink } from '../../ui';
import { analytics, analyticsActive, home, homeActive, lead, leadActive, logo, sales, salesActive } from '../../../assets';
import { ILink } from '../../types/LinkTypes';


const NavPanel = () => {
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
            path: "/sales",
            title: "Воронка",
            image: sales,
            activeImage: salesActive,
            isActive: window.location.pathname === "/sales"
        },
        {
            path: "/analytics",
            title: "Аналитика",
            image: analytics,
            activeImage: analyticsActive,
            isActive: window.location.pathname === "/analytics"
        },
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