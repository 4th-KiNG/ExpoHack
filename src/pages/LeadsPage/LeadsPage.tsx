import { ChangeEvent, useState } from "react";
import { LeadList } from "../../shared/components";
import { Title } from "../../shared/ui";
import styles from './LeadsPage.module.scss'
import { ILead } from "../../shared/types/LeadTypes";
import { observer } from "mobx-react-lite";
import userStore from "../../store/userStore";

const LeadsPage = observer(() => {
    const [leads1, setLeads1] = useState<ILead[]>([
        {
            id: "123",
            firstName: "Илья",
            lastName: "Илонов",
            fatherName: "Борисович",
            price: 7000,
            birthday: "1 апреля 2005 года",
            phone: "89413445883",
            email: "ozoki46@gmail.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить ипотеку под 50% годовых"
        },
        {
            id: "124",
            firstName: "Алексей",
            lastName: "Кузнецов",
            fatherName: "Сергеевич",
            price: 8500,
            birthday: "15 мая 2003 года",
            phone: "89114567329",
            email: "aleksei.kuznetsov@gmail.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить кредит на обучение"
        }
    ])
    const [leads2, setLeads2] = useState<ILead[]>([
        {
            id: "125",
            firstName: "Мария",
            lastName: "Иванова",
            fatherName: "Алексеевна",
            price: 6400,
            birthday: "22 июня 1998 года",
            phone: "89263451234",
            email: "maria.ivanova@example.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить инвестиционный план"
        },
        {
            id: "126",
            firstName: "Дмитрий",
            lastName: "Петров",
            fatherName: "Иванович",
            price: 7200,
            birthday: "30 декабря 1995 года",
            phone: "89634561234",
            email: "dmitriy.petrov@example.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить автокредит"
        }
    ])
    const [leads3, setLeads3] = useState<ILead[]>([])
    const [leads4, setLeads4] = useState<ILead[]>([
        {
            id: "128",
            firstName: "Николай",
            lastName: "Сидоров",
            fatherName: "Олегович",
            price: 7800,
            birthday: "18 марта 2001 года",
            phone: "89503451276",
            email: "nikolay.sidorov@example.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить ипотеку под 30% годовых"
        }
    ])
    const [leads5, setLeads5] = useState<ILead[]>([
        {
            id: "127",
            firstName: "Екатерина",
            lastName: "Смирнова",
            fatherName: "Владимировна",
            price: 9300,
            birthday: "5 ноября 2000 года",
            phone: "89094561231",
            email: "ekaterina.smirnova@example.com",
            creater: "Экспобанк",
            owner: "П-О Xвоя",
            description: "Предложить кредитную карту"
        }
    ])

    
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        userStore.setPartner(e.target.value)
        localStorage.setItem("currPartner", e.target.value)
    }

    return (
        <>
        <div className={styles.LeadsPage}>
            <div className={styles.Header}>
                <Title
                    content="Лиды"
                />
                <select className={styles.LeadSelect} name="" id="" onChange={handleSelectChange}>
                    <option value="Экспобанк" selected={userStore.currPartner == "Экспобанк"}>Экспобанк</option>
                    <option value="Д2 страхование" selected={userStore.currPartner == "Д2 страхование"}>Д2 страхование</option>
                    <option value="Автоэкспресс" selected={userStore.currPartner == "Автоэкспресс"}>Автоэкспресс</option>
                    <option value="EXPOCAR" selected={userStore.currPartner == "EXPOCAR"}>EXPOCAR</option>
                    <option value="П-О Xвоя" selected={userStore.currPartner == "П-О Xвоя"}>Парк-отель хвоя</option>
                    <option value="Лизинг 1" selected={userStore.currPartner == "Лизинг 1"}>Лизинг 1</option>
                    <option value="Лизинг 2" selected={userStore.currPartner == "Лизинг 2"}>Лизинг 2</option>
                    <option value="Лизинг 3" selected={userStore.currPartner == "Лизинг 3"}>Лизинг 3</option>
                    <option value="Лизинг 4" selected={userStore.currPartner == "Лизинг 4"}>Лизинг 4</option>
                    <option value="Лизинг 5" selected={userStore.currPartner == "Лизинг 5"}>Лизинг 5</option>
                </select>
            </div>
            
            <div className={styles.Page}>
                <LeadList
                    title="Новый"
                    leadList={leads1}
                    setLeadList={setLeads1}
                    leadColor="#FFFCF6"
                />
                <LeadList
                    title="КП выслано"
                    leadList={leads2}
                    setLeadList={setLeads2}
                    leadColor="#FFF5E7"
                />
                <LeadList
                    title="Клиент думает"
                    leadList={leads3}
                    setLeadList={setLeads3}
                    leadColor="#FFE9C9"
                />
                <LeadList
                    title="Теплый 0.7"
                    leadList={leads4}
                    setLeadList={setLeads4}
                    leadColor="#FFCF86"
                />
                <LeadList
                    title="Горячий 0.9"
                    leadList={leads5}
                    setLeadList={setLeads5}
                    leadColor="#FFAD31"
                />
            </div>
        </div>
        </>
    );
})
 
export default LeadsPage;