import { observer } from 'mobx-react-lite';
import styles from './Header.module.scss'
import { User } from '../../ui';

const Header = observer(() => {
    return (
        <>
        <header className={styles.Header}>
            <User />
        </header>
        </>
    );
})
 
export default Header;