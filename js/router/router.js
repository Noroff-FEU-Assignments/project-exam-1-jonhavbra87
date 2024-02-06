import { blogsPage } from "../pages/blogs.js";
import { blogSpecificPage } from "../pages/blogspecific.js";





export async function router() {
    switch (window.location.pathname) {
        case "/blogs/":
        case "/blogs":
        case "/blogs/index.html":
            blogsPage();

    break;
        case "/blogdetails/":
        case "/blogdetails":
        case "/blogdetails/index.html":
            blogSpecificPage();
    break;
        case "/":
        case "index.html":
            return import("../pages/homePage.js")
    default:
        console.log("404 - not found")
    };
}

/* 
export function router() {
    const path = location.pathname;



<--- Old carousel function for homepage -->
if (path === "/" || path === "/index.html") {
    getBlogs().then(posts => {
        posts.forEach(post => renderBlogs(post, true));
        initializeCarousel();
    });
}

if (path === "/html/blog/") {
    getBlogs().then(posts => {
        posts.forEach(post => {
            try {
                renderBlogs(post, false); 
            } catch (error) {
                console.error("Error rendering post:", post, error);
            }
        });
        console.log(posts);
    }).catch(error => {
        console.error("Error fetching blogs: ", error);
    });
} */

/* if (path === "/html/blogdetails/index.html") {
        getBlog(posts).then(post => {
            try {
                renderBlog(post);
            } catch (error) {
                console.error("Error rendering post:", post, error);
            }
        }).catch(error => {
            console.error("Error fetching blog: ", error);
        });
} */
/* } */