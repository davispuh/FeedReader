
import Authentication from "../Authentication"
import app from "../../services/App"

let authentication = new Authentication()
authentication.layout = "authenticated-layout"
authentication.authenticate = async (email, password) => {
    app.addComponents({
        [authentication.layout]: () => import("./AuthenticatedLayout")
    })
    return { email }
}

authentication.logout = async () => {
    return true
}

export default authentication
