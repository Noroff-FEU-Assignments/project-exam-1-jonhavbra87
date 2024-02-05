import { postsUrl } from "../api/constants.js";


export async function getBlog(id) {
    const response = await fetch(postsUrl + "&include=" + id);
   
    if (response.ok) {
        // console.log(await response.json());
        return await response.json();
        
    }
    throw new Error("Unable to access blog post with the id: " + id);
}