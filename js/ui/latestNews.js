// import { getBlogs } from "../api/getBlogs.js";
// import { renderCarousel } from "../render/carousel.js";


// const loader = document.querySelector(".lds-spinner");

// export async function renderLatestBlogs() {
//     loader.innerHTML = "";
// 	loader.style.display = "none";

//     try {
//         // Fetch blog posts
//         const postData = await getBlogs();
        

//         // Sort posts by date in descending order and get the top four
//         const latestBlogs = postData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

//    // Render each latest blog
//    latestBlogs.forEach(blogPost => renderCarousel(blogPost));
//         // Return the latest blogs
//         return latestBlogs;
//     } catch (error) {
//         console.error("Error fetching or rendering blogs: ", error);
//         // Handle the error appropriately
//     }
// }



// // import { getGames } from "../api/getProducts.js";
// // import { renderGames2 } from "../render/products.js";

// // const loader = document.querySelector(".loader");


// // export async function renderNews(){
// //     loader.innerHTML = "";
// //     const games = await getGames();
     
   
// //         let newGames = [];

// //     for (let i = 0; i < games.length; i++) {
// //         if (games[i].attributes[1].terms[0].name >= 2007) {
// //           newGames.push(games[i]);
// //           }
// //       }

     

// //       renderGames2(newGames);
     
// //       return newGames;

// // }
