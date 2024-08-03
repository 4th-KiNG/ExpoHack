import { Layout } from "../../shared/components";
import { Title } from "../../shared/ui";
import styles from './SalesPage.module.scss'

const SalesPage = () => {
    return (
        <>
        <Layout>
            <div className={styles.SalesPage}>
                <Title
                    content="Воронка"
                />
                <div className={styles.Page}>

                </div>
            </div>
        </Layout>
        </>
    );
}
 
export default SalesPage;