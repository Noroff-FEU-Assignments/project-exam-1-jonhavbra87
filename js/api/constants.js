const host = "https://kongsvinger-it.no";
const postEndpoint = "/wp-json/wp/v2/posts/";
const mediaEndpoint ="/wp-json/wp/v2/media"

export const postsUrl = new URL(postEndpoint, host);

export const mediaUrl = new URL(mediaEndpoint, host);



console.log(mediaUrl);

