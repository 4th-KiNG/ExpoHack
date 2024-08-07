// import axios from "axios"
// import { FormEvent } from "react"
// import { IP } from "./ip"
// import userStore from "../../store/userStore"

// export const AuthUser = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const {data} = await axios({
//         method: "POST",
//         url: `${IP}/user/auth`,
//         data: e.target
//     })
//     GetUser(data.jwt)
//     localStorage.setItem("jwt", data.jwt)
// }

// export const LoginUser = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const {data} = await axios({
//         method: "POST",
//         url: `${IP}/user/login`,
//         data: e.target
//     })
//     GetUser(data.jwt)
//     localStorage.setItem("jwt", data.jwt)
// }

// export const GetUser = async (token: string) => {
//     const {data} = await axios({
//         method: "get",
//         url: `${IP}/user`,
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })

//     userStore.setUser(data)
// }