import { getBlogs } from "../api/getBlogs.js";
import { renderCarousel } from "../render/carousel.js";
import { initializeCarousel } from "../ui/carousel/carousel.js"

try {
    const posts = await getBlogs();
    posts.forEach(post => {
        try {
            renderCarousel(post);;
            initializeCarousel();
        } catch (renderError) {
            console.error("Error rendering post:", post, renderError);
        }
    });
} catch (fetchError) {
    console.error("Error fetching blogs: ", fetchError);
}