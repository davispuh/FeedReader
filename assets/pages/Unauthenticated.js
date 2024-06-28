
import './Base';
import "../modules/Authentication/Register"
import app from "../services/App"
import router from "../services/Router"

app.beforeStart(app => {
    router.addRoutes([{ path: "/" }])
});
