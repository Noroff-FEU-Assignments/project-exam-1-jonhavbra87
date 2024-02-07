import { getBlogs } from "../api/getBlogs.js";
import { renderBlogs } from "../render/blogs.js";
import { displayError } from "../ui/displayError.js";

const errorMessage = document.querySelector(".error-message");

let currentPage = 1; // keep it non-exported

export function getCurrentPage() {
    return currentPage;
}

export function setCurrentPage(page) {
    currentPage = page;
}

const perPage = 10;

export async function blogsPage() {
    try {
        const posts = await getBlogs(`per_page=${perPage}&page=${currentPage}`);
        errorMessage.innerHTML = "";
        errorMessage.style.display = 'none';

        posts.forEach(post => {
            try {
                renderBlogs(post);
                if (posts.length < perPage) {
                    document.getElementById('loadMoreBtn').style.display = 'none';
                }
            } catch (renderError) {
                console.error("Error rendering post:", post, renderError);
                // render error message
                errorMessage.innerHTML = displayError("render-error", "Error rendering blog post.");
            }
        });
        // console.log(posts);
    } catch (fetchError) {
        console.error("Error fetching blogs: ", fetchError);
        // // User display
       errorMessage.innerHTML = displayError("fetch-error", `Unable to fetch blog post: ${error}`);
        errorMessage.style.display = 'block';
    }
}
