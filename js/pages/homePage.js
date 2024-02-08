import { getBlogs } from "../api/getBlogs.js";
import { renderCarousel } from "../render/carousel.js";
import { initializeCarousel } from "../ui/carousel/carousel.js"

export async function createCarousel() {
    try {
        const posts = await getBlogs();

        const latestPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

        latestPosts.forEach(post => {
            try {
                renderCarousel(post);
            } catch (renderError) {
                console.error("Error rendering post:", post, renderError);
            }
        });
        // Runs the carousel after the posts are filtered and rendered
        initializeCarousel();
    } catch (fetchError) {
        console.error("Error fetching blogs: ", fetchError);
    }
}