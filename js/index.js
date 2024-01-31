import { router } from "./router/router.js";
import { initializeNavigation } from "../js/ui/navigation.js";

router();
initializeNavigation();



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