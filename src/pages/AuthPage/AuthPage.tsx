import { RegForm } from "../../shared/components";
import styles from './AuthPage.module.scss'

const AuthPage = () => {
    return (
        <>
        <p className={styles.AuthTitle}>Введите ваш логин и пароль для регистрации в системе</p>
        <RegForm />
        </>
    );
}
 
export default AuthPage;