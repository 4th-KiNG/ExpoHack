export interface ILead{
    price: number,
    id: string,
    firstName: string
    lastName: string
    fatherName: string
    birthday: string
    phone: string
    email: string
    creater: string
    owner: string
    status?: string
    description: string
    borderColor?: string
    clickEvent?: () => void
}


export interface ICreateLeadForm{
    creater: string,
    clickEvent?: () => void,
    selectPartner?: string,
    selectStatus?: string
}
