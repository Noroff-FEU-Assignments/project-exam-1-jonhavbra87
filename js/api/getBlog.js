import { postsUrl } from "../api/constants.js";


export async function getBlog(id) {
    const response = await fetch(`${postsUrl}/${id}?_embed`);

    if (response.ok) {
        return await response.json();
    }
    throw new Error("Unable to access blog post with the id: " + id);
}