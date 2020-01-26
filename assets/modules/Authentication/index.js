
import Store from "./store"
import Login from "./Login"
import { mapActions } from "vuex";

class Authentication {
    constructor(options = {}) {
        let defaultOptions = {
            storeName: "authentication"
        }
        options = Object.assign(defaultOptions, options)
        this.store = new Store(this, options.storeName)
        this.login = Login
        this.login.methods.authenticate = this.store.authenticate.bind(this.store);
    }

    async authenticate(email, password) { return null }
    async logout() { return false }
}

export default Authentication
