import { postsUrl } from "../api/constants.js";


export async function getBlogs(params) {
    const response = await fetch(`${postsUrl}?_embed&${params}`);
    console.log(response);
    
    if (response.ok) {
        return await response.json();
    } 
    throw new Error("Request failed!")
    }