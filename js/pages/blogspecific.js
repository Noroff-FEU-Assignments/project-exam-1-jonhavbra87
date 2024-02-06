import { getBlog } from "../api/getBlog.js";
import { renderBlog } from "../render/blog.js";
import { displayError } from "../ui/displayError.js";

const errorMessage = document.querySelector(".error-message");

export async function blogSpecificPage() {
	try {
		const url = new URL(location.href);
		let id = url.searchParams.get("id");
		//console.log(id);

		const post = await getBlog(id);
		
		//console.log(post);

		// Clear any previous error messages
		errorMessage.innerHTML = "";
		errorMessage.style.display = 'none';
		renderBlog(post);
	} catch (error) {
		//Developer console log
		console.log("Unable to fetch api", error);

		// User display
        errorMessage.innerHTML = displayError("fetch-error", `Unable to fetch blog post: ${error}`);
        errorMessage.style.display = 'block';
	}
}