
<template>
    <div>
        <template v-if="isPermitted">
            <component :is="layout">
                <router-view />
            </component>
        </template>
        <template v-else>
            <main-layout>
                <login />
            </main-layout>
        </template>
    </div>
</template>

<script>
    import store from "../../services/Store";
    import router from "../../services/Router";
    import auth from "./Auth";
    import Layout from "./Layout";
    import { mapState } from "vuex";
    import $ from "jquery";

    export default {
        store,
        router,
        components: {
            login: auth.login,
            "main-layout": Layout
        },
        computed: {
            ...mapState(auth.store.name, ["isAuthenticated"]),
            layout() {
                if (this.$route.meta.layout) {
                    return this.$route.meta.layout;
                }

                if (!this.isAuthenticated) {
                    return "main-layout";
                }

                return auth.layout;
            },
            isPermitted() {
                return this.$route.meta.public || this.isAuthenticated;
            }
        },
        mounted: () => $(document).foundation()
    };
</script>
