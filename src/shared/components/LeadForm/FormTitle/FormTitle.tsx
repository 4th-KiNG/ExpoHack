import styles from './FormTitle.module.scss'

const FormTitle = ({content} : {content: string}) => {
    return (
        <>
        <h3 className={styles.FormTitle}>{content}</h3>
        </>
    );
}
 
export default FormTitle;