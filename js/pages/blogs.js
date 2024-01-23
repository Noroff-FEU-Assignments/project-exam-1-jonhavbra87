/* import { getBlogs } from "../api/getBlogs.js"
import { renderBlogs } from "../render/blogs.js";
import { displayError } from "..ui/displayError.js"

getBlogs().then(console.log);

const errorMessage = document.querySelector(".error-message");


export async function blogPage() {
try {
    errorMessage.innerHTML = "";
    const blogs = await getBlogs();
    renderBlogs(blogs).then(console.log);
    
} catch (error) {
    //This console log is for developers:
    console.log("Unable to fetch api", error);
    errorMessage.innerHTML += displayError("Unable to fetch API", error);
    console.log(error);
}
} */