import { postsUrl } from "../api/constants.js";


export async function getBlogs(params) {
    const response = await fetch(`${postsUrl}?_embed&${params}`);
    
    if (response.ok) {
        return await response.json();
        
    } 
    const errorText = await response.text();
    throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }