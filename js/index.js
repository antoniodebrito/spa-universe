import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/", "/pages/universe.html.html");
router.add("/", "/pages/exploration.html.html");
router.add("/", "/pages/404.html.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
