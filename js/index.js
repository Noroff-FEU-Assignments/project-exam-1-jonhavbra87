import { router } from "./router/router.js";
import { initializeNavigation } from "../js/ui/navigation.js";



initializeNavigation();
await router();

