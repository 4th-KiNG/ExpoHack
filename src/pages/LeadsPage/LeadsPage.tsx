import { useState } from "react";
import { Layout, LeadList } from "../../shared/components";
import { Title } from "../../shared/ui";
import styles from './LeadsPage.module.scss'
import { ILead } from "../../shared/types/LeadTypes";

const LeadsPage = () => {
    const [leads1, setLeads1] = useState<ILead[]>([
        {
            title: "Покупка пива на кооп. счет",
            price: 1400,
            content: "Нужно оформть на П.К. Смирнову оформить вкид",
            time: "2 часа назад"
        },
        {
            title: "Покупка пива на кооп. счет",
            price: 1400,
            content: "Нужно оформть на П.К. Смирнову оформить вкид",
            time: "2 часа назад"
        },
        {
            title: "Покупка пива на кооп. счет",
            price: 1400,
            content: "Нужно оформть на П.К. Смирнову оформить вкид",
            time: "2 часа назад"
        },
    ])
    const [leads2, setLeads2] = useState<ILead[]>([
        {
            title: "Покупка пива на кооп. счет",
            price: 1400,
            content: "Нужно оформть на П.К. Смирнову оформить вкид",
            time: "2 часа назад"
        }
    ])
    const [leads3, setLeads3] = useState<ILead[]>([])
    const [leads4, setLeads4] = useState<ILead[]>([])
    const [leads5, setLeads5] = useState<ILead[]>([])
    return (
        <>
        <Layout>
            <div className={styles.SalesPage}>
                <Title
                    content="Лиды"
                />
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
        </Layout>
        </>
    );
}
 
export default LeadsPage;