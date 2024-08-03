import { password } from "../../../assets";
import { IInput } from "../../types/InputTypes";
import styles from './Input.module.scss'

const Input = (props: IInput) => {
    const {type, name, placeholder, label} = props
    return (
        <>
        <label className={styles.Label}>{label}</label>
        <div className={styles.Input}>
            <input type={type} name={name} placeholder={placeholder} />
            {type === "password" && <img src={password} alt="" />}
        </div>
        </>
    );
}
 
export default Input;