// loadMorePost.js
import { blogsPage, currentPage } from "../pages/blogsPages.js";

export async function loadMorePosts() {
    
const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', async () => {
        console.log(loadMoreBtn);
        currentPage++; // Increment the current page
        await blogsPage(); // Call blogsPage to load more posts
    });
}


// export async function loadMorePosts() {
//     await loadBlogs();

//     const loadMoreBtn = document.getElementById('loadMoreBtn');
//     loadMoreBtn.addEventListener('click', async () => {
//         currentPage++;
//         await loadBlogs();
//     });
// }
