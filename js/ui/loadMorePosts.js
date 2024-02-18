import { blogsPage, setCurrentPage, getCurrentPage } from "../pages/blogs.js";


export async function loadMorePosts() {
    setTimeout(async () => {
        const loadMoreBtn = document.getElementById('loadMoreBtn');

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', async () => {
                setCurrentPage(getCurrentPage() + 1);
                await blogsPage(); 
            });
        } else {
            console.log('Load More button not found');
        }
    }, 0);
}