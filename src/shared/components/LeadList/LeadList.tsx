import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import styles from './LeadList.module.scss'
import { ILeadList } from '../../types/LeadListTypes';
import { applyDrag } from '../../../lib/utils';
import { ILead } from '../../types/LeadTypes';
import Lead from '../Lead/Lead';
import { LeadTitle } from '../../ui';

const LeadList = (props: ILeadList) => {
    const {title, leadList, setLeadList, leadColor} = props
    return (
        <>
        <div className={styles.LeadList}>
            <LeadTitle
                content={title}
                color={leadColor}
            />
            {/* @ts-ignore */}
            <Container
                groupName='leads'
                getChildPayload={(i: number) => leadList[i]}
                onDrop={(e: DropResult) => setLeadList(applyDrag(leadList, e))}
                style={{ minHeight: "calc(100% - 200px)" }}
            >
                {leadList.map((lead: ILead, index) => {
                    return(
                        <>
                        {/* @ts-ignore */}
                        <Draggable key={index}>
                            <Lead {...lead} borderColor={leadColor}/>
                        </Draggable>
                        </>
                    )
                })}
            </Container>
        </div>
        </>
    );
}
 
export default LeadList;