import { useRef, useCallback, MouseEvent } from 'react';
import { ILead } from '../../types/LeadTypes';
import AboutForm from './AboutForm/AboutForm';
import CommentsForm from './CommentsForm/CommentsForm';
import DocsForm from './DocsForm/DocsForm';
import styles from './LeadForm.module.scss'
import StatusForm from './StatusForm/StatusForm';

const LeadForm = (props: ILead) => {
    const {clickEvent} = props
    const formRef1 = useRef<HTMLDivElement>(null)
    const handleCloseForm = useCallback((event: MouseEvent<HTMLDivElement>) => {
        if (formRef1.current && !formRef1.current.contains(event.target as Node) && clickEvent) clickEvent()
    }, [clickEvent]);
    return (
        <>
        <div className={styles.LeadForm_Bg} onClick={handleCloseForm}>
            <div className={styles.LeadForm} ref={formRef1}>
                <div className={styles.LeadForm_Forms}>
                    <AboutForm {...props} />
                    <StatusForm {...props} />
                    <DocsForm />
                    <CommentsForm />
                </div>
                <div className={styles.LeadForm_Buttons}>
                    <button style={{color: "#8E99A8"}} onClick={clickEvent}>ОТМЕНИТЬ</button>
                    <button style={{backgroundColor: "#05FF00"}}>СОХРАНИТЬ</button>
                    <button style={{backgroundColor: "#FF0000"}}>УДАЛИТЬ</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default LeadForm;