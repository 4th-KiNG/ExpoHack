import { ILead } from '../../../types/LeadTypes';
import { StaticInput } from '../../../ui';
import FormTitle from '../FormTitle/FormTitle';
import styles from './StatusForm.module.scss'

const StatusForm = (props: ILead) => {
    const {creater, owner, status} = props
    return (
        <>
        <div className={styles.StatusForm}>
            <FormTitle
                content="Статус лида"
            />
            <form>
                <StaticInput
                    editable={false}
                    startValue={`${creater}`}
                    label='Создал партнер'
                    name='creater'
                />
                <StaticInput
                    editable={false}
                    startValue={`${owner}`}
                    label='Обрабатывающий парнтер'
                    name='owner'
                />
                <StaticInput
                    editable={false}
                    startValue={`${status}`}
                    label='Статус обработки'
                    name='status'
                />
            </form>
        </div>
        </>
    );
}
 
export default StatusForm;