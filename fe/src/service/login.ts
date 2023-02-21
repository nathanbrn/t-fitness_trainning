import { credentials } from "../utils/credencials"

const user = credentials.name
const password = credentials.password

export const login = (username: string, userPassword: string) => {
    if(username === user && userPassword === password) {
        return true
    } else {
        return false
    }
}