import { router } from "./router/router.js";
import { initializeNavigation } from "../js/ui/navigation.js";

//////////////////// INDEX ///////////////////////////

initializeNavigation();
await router();

