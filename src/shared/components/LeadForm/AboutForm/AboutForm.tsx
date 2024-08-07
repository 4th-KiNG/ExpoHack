import { ILead } from "../../../types/LeadTypes";
import { StaticInput } from "../../../ui";
import FormTitle from "../FormTitle/FormTitle";
import styles from './AboutForm.module.scss'


const AboutForm = (props: ILead) => {
    const {price, lastName, firstName, fatherName, birthday, phone, email} = props
    return (
        <>
        <div className={styles.AboutForm}>
            <FormTitle
                content="О лиде"
            />
            <form name="about">
                <StaticInput
                    label='Стоймость'
                    editable
                    name='price'
                    startValue={`${price}`}
                />
                <StaticInput
                    label='Фамилия'
                    editable
                    name='lastName'
                    startValue={`${lastName}`}
                />
                <StaticInput
                    label='Имя'
                    editable
                    name='firstName'
                    startValue={`${firstName}`}
                />
                <StaticInput
                    label='Отчество'
                    editable
                    name='fatherName'
                    startValue={`${fatherName}`}
                />
                <StaticInput
                    label='Дата рождения'
                    editable
                    name='birthday'
                    startValue={`${birthday}`}
                />
                <StaticInput
                    label='Телефон'
                    editable
                    name='phone'
                    startValue={`${phone}`}
                />
                <StaticInput
                    label='Почта'
                    editable
                    name='email'
                    startValue={`${email}`}
                />
            </form>
        </div>
        
        </>
    );
}
 
export default AboutForm;