import { apiUrl } from "../api/constants.js";

export async function getBlogs() {
        try {
            const response = await fetch(apiUrl); // assuming apiUrl is a valid URL
            const posts = await response.json();
            console.log(posts)
    
            // Loop through the posts and access the HTML content
            posts.forEach(post => {
                const postHTML = post.content.rendered; // Get the HTML content of the post
                /* console.log(postHTML); */
                return postHTML;
            });
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
      
    }
    


/* export async function getBlog(id) {
    const response = await fetch(apiUrl + id);
    const blog = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access game with the id: " + id);
    }
    console.log(blog)
    return blog;
}; */


	  