import { blogsPage, setCurrentPage, getCurrentPage } from "../pages/blogs.js";


export async function loadMorePosts() {
    // Wait for the DOM to update
    setTimeout(async () => {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        console.log(loadMoreBtn);

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', async () => {
                setCurrentPage(getCurrentPage() + 1);
                await blogsPage(); // Call blogsPage to load more posts
            });
        } else {
            console.log('Load More button not found');
        }
    }, 0); // The timeout ensures this runs after the current call stack, potentially after the DOM updates
}