
<template>
    <div>
        <header class="top-bar">
            <div class="top-bar-left">
                <h3 class="top-bar-title">Feed reader</h3>
            </div>
            <div class="top-bar-right">
                <h4>
                    Hello {{ user.email }}
                    <button @click="logout" type="button">Logout</button>
                </h4>
            </div>
        </header>
        <section class="grid-container">
            <slot />
        </section>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import auth from "./Auth";

    export default {
        computed: {
            ...mapState(auth.store.name, ["user"])
        },
        methods: {
            ...mapActions(auth.store.name, ["logout"])
        }
    };
</script>
