
import store from "../../services/Store"

class Store {
    constructor(authentication, name) {
        this.name = name
        store.registerModule(this.name, {
            namespaced: true,
            state() {
                return {
                    isAuthenticated: false,
                    error: "",
                    user: {
                        email: null
                    }
                }
            },
            mutations: {
                authenticate(state, user) {
                    state.user = user
                    state.isAuthenticated = true
                },
                logout(state) {
                    state.isAuthenticated = false
                    state.user = {}
                }
            },
            actions: {
                async authenticate(context, { email, password }) {
                    let user = await authentication.authenticate(email, password)
                    if (user) {
                        context.commit('authenticate', user)
                    }
                },
                async logout(context) {
                    let status = await authentication.logout()
                    if (status) {
                        context.commit('logout')
                    }
                }
            }
        })

    }

    authenticate(email, password) {
        return store.dispatch(this.name + '/authenticate', { email, password })
    }
}

export default Store;
