import { useRef } from 'react';
import { Button } from '../../../ui';
import FormTitle from '../FormTitle/FormTitle';
import styles from './DocsForm.module.scss'

const DocsForm = () => {
    const fileInput = useRef<HTMLInputElement>(null)
    return ( 
        <>
        <div className={styles.DocsForm}>
            <FormTitle
                content="Документы"
            />
            <Button
                type='button'
                content='Загрузить документы'
                size='middle'
                onClick={() => fileInput.current?.click()}
            />
            <input style={{display: "none"}} ref={fileInput} type="file" />
        </div>
        </>
    );
}
 
export default DocsForm;