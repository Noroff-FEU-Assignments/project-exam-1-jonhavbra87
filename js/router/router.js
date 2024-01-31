import { getBlogs } from "../api/getBlogs.js";
import { renderBlogs } from "../render/blogs.js";
/* import { renderBlog } from "../render/detailedblog.js"; */




export async function router() {
    switch (location.pathname) {
        case "/blogs/":
            try {
                const posts = await getBlogs();
                posts.forEach(post => {
                    try {
                        renderBlogs(post);
                    } catch (renderError) {
                        console.error("Error rendering post:", post, renderError);
                    }
                });
                console.log(posts);
            } catch (fetchError) {
                console.error("Error fetching blogs: ", fetchError);
            }
    break;
    case "/":
    case "index.html":
        return import("../pages/homePage.js")

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