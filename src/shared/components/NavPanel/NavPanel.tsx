import styles from './NavPanel.module.scss'
import { NavLink } from '../../ui';
import { home, homeActive, logo, sales, salesActive } from '../../../assets';
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
            title: "Воронка",
            image: sales,
            activeImage: salesActive,
            isActive: window.location.pathname === "/leads"
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