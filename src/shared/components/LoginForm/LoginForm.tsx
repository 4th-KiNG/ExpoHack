import { Link } from 'react-router-dom';
import { Button, CheckBox, Input } from '../../ui';
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    return (
        <>
        <form className={styles.LoginForm}>
            <Input
                type='text'
                name='login'
                label='Логин'
            />
            <Input
                type='password'
                name='password'
                label='Пароль'
            />
            <div className={styles.Settings}>
                <CheckBox label='Запомнить меня' />
                <Link to={""} className={styles.LinkText}>Забыли пароль?</Link>
            </div>
            <Button
                size='large'
                type='submit'
                content='Войти'
            />
            <div className={styles.Settings}>
                <p>Нет аккаунта?</p>
                <Link to={"/auth"} className={styles.LinkText}>Зарегистрироваться</Link>
            </div>
        </form>
        </>
    );
}
 
export default LoginForm;