const host = "https://kongsvinger-it.no";
// const postEndpoint = "/wp-json/wp/v2/posts?_embed";
const postEndpoint = "/wp-json/wp/v2/posts";


export const postsUrl = new URL(postEndpoint, host);

/* console.log(postsUrl); */
