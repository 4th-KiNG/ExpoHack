import FormTitle from '../FormTitle/FormTitle';
import styles from './CommentsForm.module.scss'

const CommentsForm = () => {
    return (
        <>
        <div className={styles.CommentsForm}>
            <FormTitle
                content="Комментарии"
            />
            <form>

            </form>
        </div>
        </>
    );
}
 
export default CommentsForm;