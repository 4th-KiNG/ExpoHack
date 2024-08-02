import { ReactNode } from "react";
import styles from './Layout.module.scss'
import NavPanel from "../NavPanel/NavPanel";
import Header from "../Header/Header";

const Layout = ({children} : Readonly<{children: ReactNode}>) => {
    return (
        <>
        <div className={styles.Layout}>
            <NavPanel />
            <div className={styles.MainContent}>
                <Header />
                {children}
            </div>
        </div>
        </>
    );
}
 
export default Layout;