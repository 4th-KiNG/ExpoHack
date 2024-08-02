import { observer } from "mobx-react-lite";
import styles from './User.module.scss'
import { IUser } from "../../types/UserTypes";



const User = observer(({login, email, avatarURL} : IUser) => {
    return (
        <>
        <div className={styles.User}>
            <img src={avatarURL} className={styles.User_Avatar} alt="" />
            <div className={styles.User_Info}>
                <p className={styles.User_Login}>{login}</p>
                <p className={styles.User_Email}>{email}</p>
            </div>
        </div>
        </>
    );
})
 
export default User;