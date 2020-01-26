
import './Base';
import app from "../services/App"
import router from "../services/Router"

app.beforeStart(app => {
    router.addRoutes([{ path: "/" }])
});
