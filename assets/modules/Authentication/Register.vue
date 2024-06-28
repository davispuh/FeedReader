
<template>
    <div class="grid-x align-center"></div>
</template>

<script>
    import app from "../../services/App";
    import router from "../../services/Router";

    let Register = this;

    app.beforeStart(app => {
        app.addComponents({ Register });
        router.addRoutes([
            {
                path: "/register",
                name: "register",
                component: Register,
                meta: { public: true }
            }
        ]);
    });

    export default {};
</script>
