import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IStaticInput } from '../../types/StaticInputTypes';
import styles from './StaticInput.module.scss'
import { edit } from '../../../assets';

const StaticInput = (props: IStaticInput) => {
    const {startValue, name, label, editable} = props
    const currInput = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(startValue)
    const [disabled, setDisabled] = useState(true)
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    useEffect(() => {
        if(!disabled && currInput.current){
            currInput.current.focus()
        }
    }, [disabled])

    return (
        <>
        <div className={styles.StaticInput}>
            <div className={styles.StaticInput_Header}>
                <label htmlFor={name}>{label}</label>
                {editable &&
                    <img src={edit} onClick={() => setDisabled(false)} alt='' />
                }
            </div>
        </div>
        <input
            ref={currInput}
            className={name === "price" ? styles.StaticInput_Price : styles.StaticInput_Input}
            style={{
                color: name === "phone" ? "#0085FF" : "black"
            }}
            disabled={disabled}
            type="text"
            value={value}
            name={name}
            onChange={handleChangeInput}
            onBlur={() => setDisabled(true)}
        />
        </>
    );
}
 
export default StaticInput;