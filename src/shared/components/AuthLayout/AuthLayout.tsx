import { ReactNode } from 'react';
import styles from './AuthLayout.module.scss'
import { authimage, logo } from '../../../assets';


const AuthLayout = ({children} : Readonly<{children: ReactNode}>) => {
    return ( 
        <>
        <div className={styles.AuthLayout}>
            <img src={authimage} className={styles.AuthLayout_Image} alt="" />
            <div className={styles.AuthLayout_Form}>
                <img src={logo} className={styles.AuthLayout_Form_Logo} alt="" />
                <h1 className={styles.AuthLayout_Form_Title}>Утончённая CRM-система</h1>
                {children}
            </div>
        </div>
        </>
    );
}
 
export default AuthLayout;