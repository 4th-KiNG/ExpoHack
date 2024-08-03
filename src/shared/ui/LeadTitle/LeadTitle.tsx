import { ILeadTitle } from '../../types/LeadTitleTypes';
import styles from './LeadTitle.module.scss'

const LeadTitle = (props: ILeadTitle) => {
    const {content, color} = props
    return (
        <>
        <div
            className={styles.LeadTitle}
            style={{
                backgroundColor: color
            }}
        >
            <h2>{content}</h2>
            <button>+</button>
        </div>
        </>
    );
}
 
export default LeadTitle;