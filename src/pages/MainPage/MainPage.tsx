import { Title } from '../../shared/ui';
import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <>
        <div className={styles.MainPage}>
            <Title content='Главная' />
            <div className={styles.Page}>
            </div>
        </div>
        </>
    );
}
 
export default MainPage;