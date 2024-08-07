import { ILead } from "./LeadTypes";

export interface ILeadList{
    title: string,
    leadList: ILead[],
    setLeadList: (leads: ILead[]) => void,
    leadColor: string
}