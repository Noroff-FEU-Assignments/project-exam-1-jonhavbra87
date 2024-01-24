const host = "https://kongsvinger-it.no";
const postEndpoint = "/wp-json/wp/v2/posts?_embed";

// Correctly combine the host and endpoint
export const postsUrl = new URL(postEndpoint, host);

console.log(postsUrl);




//const mediaEndpoint ="/wp-json/wp/v2/media/"
//export const mediaUrl = new URL(mediaEndpoint, host);
//export const mediaUrl = new URL(mediaEndpoint, host);
/* console.log(mediaUrl); */

