import { Title } from '../../shared/ui';
import styles from './AnalyticsPage.module.scss'

const AnalyticsPage = () => {
    return (
        <>
        <div className={styles.AnalyticsPage}>
            <Title
                content='Аналитика'
            />
            <div className={styles.Page}>

            </div>
        </div>
        </>
    );
}
 
export default AnalyticsPage;