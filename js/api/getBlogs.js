import { postsUrl } from "../api/constants.js";


export async function getBlogs(params) {
    const response = await fetch(`${postsUrl}?_embed&${params}`);
    console.log(response);
    
    if (response.ok) {
        return await response.json();
        
    } 
    const errorText = await response.text(); // or response.json() if the server sends JSON
    throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }