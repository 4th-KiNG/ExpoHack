import { ICreateLeadForm } from '../../types/LeadTypes';
import { Input } from '../../ui';
import styles from './CreateLeadForm.module.scss'

const CreateLeadForm = (props: ICreateLeadForm) => {
    const {creater, status} = props
    return (
        <>
        <div className={styles.Bg}>
            <div className={styles.CreateLeadForm}>
                <h2 className={styles.CreateLeadForm_Title}>Создание лида</h2>
                <div>
                    <p>{creater + " " + "/" + " " + status}</p>
                    <form action="">
                        <Input
                            type='text'
                            name='price'
                            label='Стоймость'
                        />
                        <Input
                            type='text'
                            name='lastName'
                            label='Фамилия'
                        />
                        <Input
                            type='text'
                            name='firstName'
                            label='Имя'
                        />
                        <Input
                            type='text'
                            name='fatherName'
                            label='Отчество'
                        />
                        <Input
                            type='text'
                            name='birthday'
                            label='Дата рождения'
                        />
                        <Input
                            type='text'
                            name='phone'
                            label='Телефон'
                        />
                        <Input
                            type='text'
                            name='email'
                            label='Почта'
                        />
                        <Input
                            type='text'
                            name='description'
                            label='Описание'
                        />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default CreateLeadForm;