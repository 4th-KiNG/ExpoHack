import { makeAutoObservable } from "mobx";
import { IUser } from "../shared/types/UserTypes";

class UserStore{
    user: IUser = {
        login: "",
        email: "",
        avatarURL: ""
    }
    constructor(){
        makeAutoObservable(this)
    }
}

const userStore = new UserStore()

export default userStore