import { ICreateLeadForm } from '../../types/LeadTypes';
import { Input } from '../../ui';
import styles from './CreateLeadForm.module.scss'

const CreateLeadForm = (props: ICreateLeadForm) => {
    const {clickEvent, selectPartner, selectStatus} = props
    const partenrs = ["Экспобанк", "Д2 страхование", "Автоэкспресс", "ЭКСПОКАР", "П-О Xвоя", "Лизинг 1", "Лизинг 2", "Лизинг 3", "Лизинг 4", "Лизинг 5"]
    const status = ["Новый", "КП выслано", "Клиент думает", "Теплый 0.7", "Горячий 0.9"]
    return (
        <>
        <div className={styles.Bg}>
            <div className={styles.CreateLeadForm}>
                <h2 className={styles.CreateLeadForm_Title}>Создание лида</h2>
                <form action="" className={styles.CreateLeadForm_Form}>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Input
                            type='text'
                            name='partner'
                            label='Партнёр'
                            isSmall
                            inputType='select'
                            selectList={partenrs}
                            selectValue={selectPartner}
                        />
                        <Input
                            type='text'
                            name='partner'
                            label='Статус'
                            isSmall
                            inputType='select'
                            selectList={status}
                            selectValue={selectStatus}
                        />
                    </div>
                    <Input
                        type='text'
                        name='price'
                        label='Стоймость'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='lastName'
                        label='Фамилия'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='firstName'
                        label='Имя'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='fatherName'
                        label='Отчество'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='birthday'
                        label='Дата рождения'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='phone'
                        label='Телефон'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='email'
                        label='Почта'
                        isSmall
                    />
                    <Input
                        type='text'
                        name='description'
                        label='Описание'
                        isSmall
                        inputType='textarea'
                    />
                </form>
                <div className={styles.Buttons}>
                    <button style={{color: "#8E99A8"}} onClick={clickEvent}>ОТМЕНИТЬ</button>
                    <button style={{backgroundColor: "#05FF00"}}>СОХРАНИТЬ</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default CreateLeadForm;