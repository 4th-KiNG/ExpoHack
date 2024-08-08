import { useState } from 'react';
import { ILeadTitle } from '../../types/LeadTitleTypes';
import styles from './LeadTitle.module.scss'
import CreateLeadForm from '../../components/CreateLeadForm/CreateLeadForm';
import userStore from '../../../store/userStore';

const LeadTitle = (props: ILeadTitle) => {
    const {content, color} = props
    const [showCreateForm, setShowCreateForm] = useState(false)
    return (
        <>
        <div
            className={styles.LeadTitle}
            style={{
                backgroundColor: color
            }}
        >
            <h2>{content}</h2>
            <button onClick={() => setShowCreateForm(true)}>+</button>
        </div>
        {showCreateForm && 
            <CreateLeadForm
                clickEvent={() => setShowCreateForm(false)}
                selectPartner={userStore.currPartner}
                selectStatus={content}
            />
        }
        </>
    );
}
 
export default LeadTitle;