import { getGames } from "../api/getProducts.js";
import { renderGames2 } from "../render/products.js";

const loader = document.querySelector(".loader");


export async function renderNews(){
    loader.innerHTML = "";
    const games = await getGames();
     
   
        let newGames = [];

    for (let i = 0; i < games.length; i++) {
        if (games[i].attributes[1].terms[0].name >= 2007) {
          newGames.push(games[i]);
          }
      }

     

      renderGames2(newGames);
     
      return newGames;

}
