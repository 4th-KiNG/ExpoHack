import { useRef, useState } from "react";
import { eyeClose, eyeOpen } from "../../../assets";
import { IInput } from "../../types/InputTypes";
import styles from './Input.module.scss'

const Input = (props: IInput) => {
    const {type, name, placeholder, label} = props
    const inputPass = useRef<HTMLInputElement>(null)
    const [isShowPass, setShowPass] = useState(false)
    return (
        <>
        <label className={styles.Label}>{label}</label>
        <div className={styles.Input}>
            <input type={type} name={name} placeholder={placeholder} ref={inputPass} />
            {type === "password" && 
                <img
                    src={isShowPass ? eyeClose : eyeOpen}
                    onClick={() => {
                        !isShowPass ? 
                        inputPass.current?.setAttribute("type", "text") :
                        inputPass.current?.setAttribute("type", "password")
                        setShowPass(!isShowPass)
                    }}
                    alt=""
                />
            }
        </div>
        </>
    );
}
 
export default Input;