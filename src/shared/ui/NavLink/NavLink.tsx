import { Link } from "react-router-dom";
import styles from './NavLink.module.scss'
import { ILink } from "../../types/LinkTypes";

const NavLink = ({path, title, image, isActive, activeImage} : ILink) => {
    return (
        <>
            <Link 
                to={path}
                className={styles.NavLink}
                style={{
                    borderRight: `10px solid ${isActive ? "#FF8F32" : "white"}`,
                    backgroundColor: `${isActive ? "#FFF9F1" : "white"}`,
                    color: `${isActive ? "#FF8F32" : "#8E99A8"}`
                }}
            >
                <img src={isActive ? activeImage : image} alt="" />
                <p>{title}</p>
            </Link>
        </>
    );
}
 
export default NavLink;