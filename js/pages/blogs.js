import { getBlogs } from "../api/getBlogs.js";
import { renderBlogs } from "../render/blogs.js";
import { displayError } from "../ui/displayError.js";

const errorMessage = document.querySelector(".error-message");

let currentPage = 1;

export function getCurrentPage() {
    return currentPage;
}

export function setCurrentPage(page) {
    currentPage = page;
}

const perPage = 9;

export async function blogsPage() {
    try {
        errorMessage.innerHTML = "";
        errorMessage.style.display = 'none';

        const posts = await getBlogs(`per_page=${perPage}&page=${currentPage}`);
       

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

    } catch (fetchError) {
        console.error("Error fetching blogs: ", fetchError);
        // // User display
       errorMessage.innerHTML = displayError("fetch-error", `Unable to fetch blog post: ${error}`);
        errorMessage.style.display = 'block';
    }
}
