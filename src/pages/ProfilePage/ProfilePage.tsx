import { observer } from 'mobx-react-lite';
import { Title } from '../../shared/ui';
import styles from './ProfilePage.module.scss'
import userStore from '../../store/userStore';
import { defaultAvatar } from '../../assets';

const ProfilePage = observer(() => {
    const user = userStore.user
    return (
        <>
        <div className={styles.ProfilePage}>
            <Title
                content='Личный кабинет'
            />
            <div className={styles.Page}>
                <img className={styles.User_Avatar} src={!user.avatarURL ? defaultAvatar : user.avatarURL} alt="" />
                <div className={styles.User_Info}>
                    <div className={styles.User_Info_Main}>
                        <p>{user.name} {user.lastName}</p>
                        <span className={styles.User_Info_Span}>Менеджер</span>
                    </div>
                    <div className={styles.User_Info_Other}>
                        <p>Пол: <span className={styles.User_Info_Span}>{user.sex ? user.sex : "Не указан"}</span></p>
                        <p>Дата рождения: <span className={styles.User_Info_Span}>{user.birthday ? user.birthday : "Не указан"}</span></p>
                        <p>Телефон: <span className={styles.User_Info_Span}>{user.phone ? user.phone : "Не указан"}</span></p>
                        <p>Эл. почта: <span className={styles.User_Info_Span}>{user.email ? user.email : "Не указан"}</span></p>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
})
 
export default ProfilePage;