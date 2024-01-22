import { getBlogs } from "./api/getBlogs.js";
/* import { homePage } from "./pages/homePage.js"; */

// We have to make sure that the right code fires on the right page

//Router - suggested by Oliver:

if (window.location.pathname === "/html/blog/index.html") {
    getBlogs();
}

/* switch(location.pathname) {
    case "/blog/":
       
        break;
    case "/":
        homePage()
        break;
    default:
}
 */