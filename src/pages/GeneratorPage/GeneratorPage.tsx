import { useRef, useState } from 'react';
import { Button, Title } from '../../shared/ui';
import userStore from '../../store/userStore';
import styles from './GeneratorPage.module.scss'
import CreateLeadForm from '../../shared/components/CreateLeadForm/CreateLeadForm';

const GeneratorPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [showCreateForm, setShowCreateForm] = useState(false)
    return (
        <>
        <div className={styles.GeneratorPage}>
            <Title content='Лидогенерация' />
            <div className={styles.Page}>
                <h3 className={styles.GeneratorPage_Title}>{userStore.user.name} {userStore.user.lastName}</h3>
                <p className={styles.GeneratorPage_Content}>Загрузите ваших клиентов</p>
                <div  className={styles.GeneratorPage_Buttons}>
                    <Button type='button' content='Загрузить одного клиента' bgColor='#FF8F32' onClick={() => setShowCreateForm(true)} />
                    <Button type='button' content='Загрузить несколько клиентов (.json/.csv)' bgColor='#FF8F32' onClick={() => inputRef.current?.click()} />
                    <input type="file" ref={inputRef} />
                </div>
            </div>
        </div>
        {showCreateForm && 
            <CreateLeadForm
                clickEvent={() => setShowCreateForm(false)}
            />
        }
        </>
    );
}
 
export default GeneratorPage;