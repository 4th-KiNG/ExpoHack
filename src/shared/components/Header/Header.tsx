import { observer } from 'mobx-react-lite';
import styles from './Header.module.scss'
import { User } from '../../ui';
import SearchInput from '../../ui/SearchInput/SearchInput';

const Header = observer(() => {
    return (
        <>
        <header className={styles.Header}>
            <SearchInput />
            <User />
        </header>
        </>
    );
})
 
export default Header;