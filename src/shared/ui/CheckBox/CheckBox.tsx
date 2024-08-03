import { ICheckBox } from '../../types/CheckBoxTypes';
import styles from './CheckBox.module.scss'

const CheckBox = (props: ICheckBox) => {
    const {label} = props
    return (
        <>
        <label className={styles.CheckBox}>
            <input type="checkbox" />
            <span>{label}</span>
        </label>
        </>
    );
}
 
export default CheckBox;