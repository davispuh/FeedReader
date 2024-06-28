
import Store from "./store"
import Login from "./Login"
import { mapState } from "vuex";

class Authentication {
    constructor(options = {}) {
        let defaultOptions = {
            storeName: "authentication"
        }
        options = Object.assign(defaultOptions, options)
        this.store = new Store(this, options.storeName)
        this.login = Login
        this.login.methods.authenticate = this.store.authenticate.bind(this.store)
        Object.assign(this.login.computed, mapState(this.store.name, ["error"]))
    }

    async authenticate(email, password) { return null }
    async logout() { return false }
}

export default Authentication
