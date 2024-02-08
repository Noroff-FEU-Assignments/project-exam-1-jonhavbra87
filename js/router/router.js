import { blogsPage } from "../pages/blogs.js";
import { blogSpecificPage } from "../pages/blogspecific.js";
// import { renderLatestBlogs } from "../ui/latestNews.js";
import { loadMorePosts } from "../ui/loadMorePosts.js";
// import { initializeModal } from "../ui/modal.js";


//////////////////////////////////////////////
//My Router

export async function router() {
    switch (window.location.pathname) {
        case "/blogs/":
        case "/blogs":
        case "/blogs/index.html":
            blogsPage();
            loadMorePosts();
    break;
        case "/blogdetails/":
        case "/blogdetails":
        case "/blogdetails/index.html":
            await blogSpecificPage();
    break;
        case "/contact/":
        case "/contact":
        case "contact/index.html":
    break;
        case "/":
        case "index.html":
            return import("../pages/homePage.js")
    default:
        console.log("404 - not found")
    };
}