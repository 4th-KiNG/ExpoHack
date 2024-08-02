import styles from './Title.module.scss'

const Title = ({content}: {content: string}) => {
    return (
        <>
        <h1 className={styles.Title}>{content}</h1>
        </>
    );
}
 
export default Title;