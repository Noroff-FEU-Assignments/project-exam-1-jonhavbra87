import { router } from "./router/router.js";
import { initializeNavigation } from "../js/ui/navigation.js";
import { googleMapsIframe } from "./ui/googlemaps.js";

//////////////////// INDEX ///////////////////////////

initializeNavigation();
router();
googleMapsIframe();
