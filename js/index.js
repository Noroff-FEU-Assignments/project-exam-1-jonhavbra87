import { getBlogs } from "./api/getBlogs.js";
import { renderBlogs } from "./render/blogs.js";
import { renderBlog } from "./render/detailedblog.js";
import { initializeNavigation } from "./ui/navigation.js";
import { initializeCarousel } from "./pages/carousel.js"

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
});

document.addEventListener('DOMContentLoaded', (event) => {
    initializeNavigation();
    getBlogs().then(() => {
        if (path === "/" || path === "/index.html") {
            initializeCarousel(); // Initialize carousel after blogs are fetched
        }
    });
});

const path = window.location.pathname;

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



if (path  === "/" || path === "/index.html") {
    getBlogs().then(posts => {
        posts.forEach(post => renderBlogs(post, true));
        
    });

}


/*     document.addEventListener('DOMContentLoaded', function() {
        console.log(document.querySelector(".carousel"));
        console.log(document.querySelector(".blogposts"));
        // ... rest of your code
    }); */
/* // Example of using async/await
async function loadContent() {
    try {
        const posts = await fetchBlogPosts();
        fetchBlogPosts().then(posts => {
            posts.forEach(renderBlogs);
        })
        const media = await fetchMedia();
        fetchMedia().then(media => {
            media.forEach(renderBlogs);
        })
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

if (window.location.pathname === "/html/blog/index.html") {
    loadContent();
}
 */



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