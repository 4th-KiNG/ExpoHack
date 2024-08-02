import { Layout } from '../../shared/components';
import { Title } from '../../shared/ui';
import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <>
        <Layout>
            <div className={styles.MainPage}>
                <Title content='Главная' />
                <div className={styles.Page}>
                </div>
            </div>
        </Layout>
        </>
    );
}
 
export default MainPage;