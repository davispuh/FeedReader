
import { createApp } from 'vue'
import AppComponent from '../modules/App/App'
import merge from 'deepmerge'

import $ from "jquery";

class App {
    initialComponents = {}
    serverState = {}
    serverData = {}

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

    setData(serverData) {
        if (serverData && Object.entries(serverData).length > 0) {
            Object.assign(this.serverData, serverData)
        }
    }

    renderState(store) {
        if (this.serverState && Object.entries(this.serverState).length > 0) {
            this.serverState = $.extend({}, store.state, this.serverState);
            store.replaceState(this.serverState)
        }
    }

    renderData(vm) {
        console.log(vm)
        for (const [componentName, data] of Object.entries(this.serverData)) {
            for (const [name, value] of Object.entries(data)) {
            //let data = vm.$options.components[name].data()


            vm.$options.components[componentName]._data[name] = value

            //this.serverState = $.extend({}, data, this.serverState);


            //Vue.set(name, )
            //Object.assign(data, value)
            //targetApp.components[name].data = function () { return data }
            }
        }
    }

    render(targetApp, appId) {
        targetApp.el = appId
        Object.assign(targetApp.components, this.initialComponents)

        this.renderState(targetApp.store)

        let that = this;
        targetApp.created = function() {
            that.renderData(this)
        }

        return createApp(targetApp)
    }

    run(appId) {
        this.loader.then(() => {
            this.vue = this.render(AppComponent, appId)
        })
        this.completeLoad(this)
    }
}

export default new App;
