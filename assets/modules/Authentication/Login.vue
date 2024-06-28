
<template>
    <div class="grid-x align-center">
        <div class="cell medium-6 dialog">
            <form method="POST" @submit.prevent="login">
                <div class="grid-x grid-margin-x grid-padding-x align-center">
                    <div class="cell medium-12">
                        <h4 class="text-center">Login</h4>
                        <div v-show="error" class="small callout alert" data-closable>
                            <h6>{{ error }}</h6>
                            <button
                                class="small close-button"
                                aria-label="Dismiss alert"
                                type="button"
                                data-close
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <label for="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            v-model="email"
                            placeholder="Email"
                            required="required"
                            minlength="3"
                        />
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            v-model="password"
                            placeholder="Password"
                            required="required"
                            minlength="5"
                        />
                    </div>
                </div>
                <div class="grid-x grid-padding-x align-center">
                    <div class="cell medium-6">
                        <button type="submit">Login</button>
                    </div>
                    <div class="cell medium-6">
                        <router-link :to="{ name: 'register'}" tag="button" type="button">Sign Up</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            async login() {
                await this.authenticate(this.email, this.password);
            },
            async authenticate(email, password) {
                // this is just a placeholder, actual implementation in store
            }
        },
        computed: {
            error() {
                // this is just a placeholder, actual implementation in store
            }
        },
        data() {
            return {
                email: "",
                password: ""
            };
        }
    };
</script>
