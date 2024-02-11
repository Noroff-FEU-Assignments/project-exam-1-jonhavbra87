import { getBlogs } from "../api/getBlogs.js";
import { renderCarousel } from "../render/carousel.js";
import { initializeCarousel } from "../ui/carousel/carousel.js"

const errorMessage = document.querySelector(".slider");

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
     
        initializeCarousel();
    } catch (error) {
		//Developer console log
		console.log("Unable to fetch api", error);

		// User display
        errorMessage.innerHTML += displayError("fetch-error", `Unable to fetch blog post: ${error}`);
        errorMessage.style.display = 'block';
	}
}