// import axios from "axios"
// import { IP } from "./ip"
// import userStore from "../../store/userStore"
// import { ILead } from "../../shared/types/LeadTypes"

// export const GetLeads = async(partner: string) => {
//     const {data} = await axios({
//         method: "get",
//         url: `${IP}/lead?partner=${partner}`
//     })
//     userStore.setFirst(data.first)
//     userStore.setSecond(data.second)
//     userStore.setThird(data.third)
//     userStore.setFouth(data.fouth)
//     userStore.setFifth(data.fifth)
// }

// export const SetLeads = async (updateLeads: ILead[], status: string) => {
//     const {} = await axios({
//         method: "patch",
//         url: `${IP}/lead`,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data: JSON.stringify({
//             updateLeads: updateLeads,
//             status: status
//         })
//     })
// }

// export const GetLead = async (id: string) => {
//     const {data} = await axios({
//         method: "get",
//         url: `${IP}/lead/${id}`
//     })

//     return data
// }

// export const UpdateLead = async (id: string) => {
//     const sendForm = document.forms.namedItem("about")
//     const price = sendForm?.price?.value
//     const firstName = sendForm?.firstName?.value
//     const lastName = sendForm?.lastName?.value
//     const fatherName = sendForm?.fatherName?.value
//     const birthday = sendForm?.birthday?.value
//     const phone = sendForm?.phone?.value
//     const email = sendForm?.email?.value
//     const {data} = await axios({
//         method: "patch",
//         url: `${IP}/lead/${id}`,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data: JSON.stringify({
//             price: price,
//             firstName: firstName,
//             lastName: lastName,
//             fatherName: fatherName,
//             birthday: birthday,
//             phone: phone,
//             email: email
//         })
//     })

//     console.log(data)
// }

// export const DeleteLead = async (id: string) => {
//     const {data} = await axios({
//         method: "delete",
//         url: `${IP}/lead/${id}`
//     })

//     console.log(data)
// }