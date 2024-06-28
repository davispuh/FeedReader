
import './Base';
import app from "../services/App"
import router from "../services/Router"
import Feeds from "../modules/Feeds/Feeds"

app.beforeStart(app => {
    app.addComponents({
        "authenticated-layout": () => import("../modules/App/AuthenticatedLayout")
    })
    router.addRoutes([{ path: "/", component: Feeds }])
});
