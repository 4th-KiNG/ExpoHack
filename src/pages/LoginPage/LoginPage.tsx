import { LoginForm } from "../../shared/components";
import styles from './LoginPage.module.scss'

const LoginPage = () => {

    return (
        <>
        <p className={styles.LoginTitle}>Введите ваш логин и пароль для входа в систему</p>
        <LoginForm />
        </>
    );
}
 
export default LoginPage;