import { Link } from 'react-router-dom';
import { Button, Input } from '../../ui';
import styles from './RegForm.module.scss'

const RegForm = () => {
    return (
        <>
        <form className={styles.RegForm}>
            <Input
                type='text'
                name='login'
                label='Логин'
            />
            <Input
                type='text'
                name='name'
                label='Имя'
            />
            <Input
                type='text'
                name='lastName'
                label='Фамилия'
            />
            <Input
                type='password'
                name='password'
                label='Пароль'
            />
            <Input
                type='password'
                label='Повторите пароль'
            />
            <Button
                size='large'
                type='submit'
                content='Зарегистрироваться'
            />
            <div className={styles.Settings}>
                <p>Есть аккаунт?</p>
                <Link to={"/login"} className={styles.LinkText}>Войти</Link>
            </div>
        </form>
        </>
    );
}
 
export default RegForm;