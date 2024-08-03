import { ILead } from "../../types/LeadTypes";
import styles from './Lead.module.scss'


const Lead = (props: ILead) => {
    const {title, content, price, time, borderColor} = props
    return (
        <>
        <div
            className={styles.Lead}
            style={{
                borderLeft: `5px ${borderColor ? borderColor : "white"} solid`
            }}
        >
            <h6 className={styles.Lead_Title}>{title}</h6>
            <p className={styles.Lead_Price}>{price} руб</p>
            <p className={styles.Lead_Content}>{content}</p>
            <p className={styles.Lead_Time}>{time}</p>
        </div>
        </>
    );
}
 
export default Lead;