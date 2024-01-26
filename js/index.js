import { getBlogs } from "./api/getBlogs.js";
import { renderBlogs } from "./render/blogs.js"
import { renderCarousel } from "./render/carousel.js"
import { initializeNavigation } from './ui/navigation.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});

const path = window.location.pathname;

if (path === "/html/blog/index.html") {
    getBlogs().then(posts => {
        posts.forEach(renderBlogs);
    })
}

if (path  === "/" || path === "/index.html") {
    getBlogs().then(posts => {
        renderCarousel(posts);
    });
}

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