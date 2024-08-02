import { observer } from 'mobx-react-lite';
import styles from './Header.module.scss'
import { User } from '../../ui';

const Header = observer(() => {
    return (
        <>
        <header className={styles.Header}>
            <User
                login='Виталий Цаль'
                email="Менеджер"
                avatarURL='https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600'
            />
        </header>
        </>
    );
})
 
export default Header;