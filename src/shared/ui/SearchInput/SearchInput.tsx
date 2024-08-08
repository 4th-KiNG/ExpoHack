import { search } from '../../../assets';
import styles from './SearchInput.module.scss'

const SearchInput = () => {
    return (
        <>
        <div className={styles.SearchInput}>
            <img src={search} alt="" />
            <input type="text" placeholder='Xотим найти...' />
        </div>
        </>
    );
}
 
export default SearchInput;