import { getBlogs } from "./api/getBlogs.js";
import { renderBlogs } from "./render/blogs.js";
import { renderBlog } from "./render/detailedblog.js";
/* import { initializeNavigation } from "./ui/navigation.js"; */
import { initializeCarousel } from "./pages/carousel.js"
/* 
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
}); */

/* document.addEventListener('DOMContentLoaded', (event) => {
        getBlogs().then(posts => {
            posts.forEach(post => renderBlogs(post, true)); // Render blogs
           }).catch(error => {
        console.error("Error fetching blogs: ", error);
    });
}); */



const path = window.location.pathname;


if (path === "/" || path === "/index.html") {
    getBlogs().then(posts => {
        posts.forEach(post => renderBlogs(post, true));
        initializeCarousel();
    });
}

if (path === "/html/blog/index.html") {
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
}

if (path === "/html/blogdetails/index.html") {
        getBlog(posts).then(post => {
            try {
                renderBlog(post);
            } catch (error) {
                console.error("Error rendering post:", post, error);
            }
        }).catch(error => {
            console.error("Error fetching blog: ", error);
        });
}


/* async function loadBlogContent() {
    try {
        // Fetch the blog posts
        const posts = await fetchBlogPosts();
        // Process each post
        posts.forEach(renderBlogs);

        // Fetch the media
        const media = await fetchMedia();
        // Process each media item
        media.forEach(mediaItem => {
            // Use the appropriate function to render media
            renderMedia(mediaItem);
        });
    } catch (error) {
        console.error('Error loading content:', error);
    }
} */

/* 
const posts = await fetchBlogPosts();
        posts.forEach(renderBlogs); */