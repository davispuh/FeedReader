
import Vue from 'vue'
import AppComponent from '../modules/App/App'

class App {
    initialComponents = {}
    serverState = {}

    constructor() {
        this.vue = null;
        this.loader = new Promise((resolve, reject) => {
            this.completeLoad = resolve;
            this.cancelLoad = reject;
        })
    }

    addComponents(newComponents) {
        let components = this.initialComponents;
        if (this.vue) {
            components = this.vue.$options.components
        }
        Object.assign(components, newComponents)
    }

    beforeStart(callback) {
        this.loader = this.loader.then(callback)
    }

    setState(state) {
        if (state && Object.entries(state).length > 0) {
            Object.assign(this.serverState, state)
        }
    }

    run(appId) {
        this.loader.then(() => {
            AppComponent.el = appId
            Object.assign(AppComponent.components, this.initialComponents)

            if (this.serverState && Object.entries(this.serverState).length > 0) {
                AppComponent.store.replaceState(this.serverState)
            }

            this.vue = new Vue(AppComponent)
        })
        this.completeLoad(this)
    }
}

export default new App;
