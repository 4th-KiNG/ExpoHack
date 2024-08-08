import { makeAutoObservable } from "mobx";
import { IUser } from "../shared/types/UserTypes";

export const DefaultUser = {
    id: "",
    login: "1",
    name: "Игорь",
    lastName: "Борис",
    email: "expohack@gmail.com",
    phone: "+79515067506",
    sex: "Мужской",
    birthday: "1 апреля 2000г",
    avatarURL: ""
}

class UserStore{
    user: IUser = DefaultUser
    currPartner: string = localStorage.getItem("currPartner") ? `${localStorage.getItem("currPartner")}` : "Экспобанк"
    constructor(){
        makeAutoObservable(this)
    }
    setPartner(partner: string){
        this.currPartner = partner
    }
}

const userStore = new UserStore()

export default userStore