import { Prod } from "../utils/Prod"

export const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Prod)
        }, 1000)
    })
}