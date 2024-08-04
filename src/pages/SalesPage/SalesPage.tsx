import { Title } from "../../shared/ui";
import styles from './SalesPage.module.scss'


const SalesPage = () => {
    return (
        <>
        <div className={styles.SalesPage}>
            <Title
                content="Воронка"
            />
            <div className={styles.Page}>

            </div>
        </div>
        </>
    );
}
 
export default SalesPage;