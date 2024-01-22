import { getBlog } from "../api/getBlogs.js"
import { renderBlogs } from "../render/blogs.js";
import { displayError } from "../displayError.js"

const errorMessage = document.querySelector(".blogposts");


export async function blogPage() {
try {
    errorMessage.innerHTML = "";
    const blogs = await getBlog();
    renderBlogs(blogs);
} catch (error) {
    //This console log is for developers:
    console.log("Unable to fetch api", error);
    errorMessage.innerHTML += displayError("Unable to fetch API", error);
}
}