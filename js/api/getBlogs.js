import { postsUrl } from "../api/constants.js";


export async function getBlogs() {
    const response = await fetch(postsUrl);
    
    if (response.ok) {
        return await response.json();
    } 
    throw new Error("Request failed!")
    }


/* export async function getMedia() {
    const response = await fetch(mediaUrl);
    
    if (response.ok) {
        return await response.json();

    } 
    throw new Error("Request failed!")
    }
 */
/* // Function to fetch blog posts
export async function fetchBlogPosts() {
    fetch(postUrl)
        .then(response => response.json())
        .then(posts => {
            console.log('Blog Posts:', posts);
            // Process the posts here
        })
        .catch(error => console.error('Error fetching posts:', error));
}



// Call the functions to fetch data
fetchBlogPosts();

 */






/* console.log(getBlogs()); */
  /*   try {
        const response = await fetch(apiUrl); // assuming apiUrl is a valid URL
        const posts = await response.json();
              
        // Loop through the posts and access the HTML content
        posts.forEach(post => {
            const postHTML = post.content.rendered; // Get the HTML content of the post
            console.log(postHTML);
            
        });
    } catch (error) {
        console.log('Error fetching posts:', error);
    } */
/* export async function getBlog(id) {
    const response = await fetch(apiUrl + id);
    const blog = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access game with the id: " + id);
    }
    console.log(blog)
    return blog;
}; */


	  