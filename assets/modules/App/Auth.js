
import Authentication from "../Authentication"
import app from "../../services/App"
import ky from 'ky-universal'

let authentication = new Authentication()
authentication.layout = "authenticated-layout"
authentication.authenticate = async (email, password) => {
    app.addComponents({
        [authentication.layout]: () => import("./AuthenticatedLayout")
    })

    //const result = await ky.post('/', { json: { email, password } }).json();
    //console.log(result)

    return { email }
}

authentication.logout = async () => {
    //const result = await ky.delete('/logout').json();
    return true
}

export default authentication
