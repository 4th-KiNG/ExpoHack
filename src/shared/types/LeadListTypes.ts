import { Dispatch, SetStateAction } from "react";
import { ILead } from "./LeadTypes";

export interface ILeadList{
    title: string,
    leadList: ILead[],
    setLeadList: Dispatch<SetStateAction<ILead[]>>,
    leadColor: string
}