import { getBlogs } from "../api/getBlogs.js";
import { renderBlogs } from "../render/blogs.js";

export async function blogsPage() {
    try {
        const posts = await getBlogs();
        posts.forEach(post => {
            try {
                renderBlogs(post);
            } catch (renderError) {
                console.error("Error rendering post:", post, renderError);
            }
        });
        console.log(posts);
    } catch (fetchError) {
        console.error("Error fetching blogs: ", fetchError);
    }
}