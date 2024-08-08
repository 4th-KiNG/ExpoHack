import { useRef, useState } from "react";
import { eyeClose, eyeOpen } from "../../../assets";
import { IInput } from "../../types/InputTypes";
import styles from './Input.module.scss'

const Input = (props: IInput) => {
    const {type, name, placeholder, label, isSmall = false, inputType = "input", selectList, selectValue} = props
    const inputPass = useRef<HTMLInputElement>(null)
    const [isShowPass, setShowPass] = useState(false)
    return (
        <>
        <div style={{display: "flex", flexDirection: "column", gap: "10px", flex: "1"}}>
            <label className={isSmall ? styles.Label_Small : styles.Label}>{label}</label>
            <div className={isSmall ? styles.Input_Small : styles.Input}>
                {inputType === "input" &&
                    <>
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
                    </>
                }
                {inputType === "textarea" && <textarea name={name} />}
                {inputType === "select" &&
                    <>
                    <select name={name}>
                        {selectList?.map((option: string) => {
                            return(
                                <option
                                    value={option}
                                    selected={selectValue == option}
                                    disabled={selectValue ? true : false}
                                >
                                    {option}
                                </option>
                            )
                        })}
                    </select>
                    </>
                }
            </div>
        </div>
        
        </>
    );
}
 
export default Input;