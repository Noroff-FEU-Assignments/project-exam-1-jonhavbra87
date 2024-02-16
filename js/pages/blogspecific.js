import { getBlog } from "../api/getBlog.js";
import { renderBlog } from "../render/blogspecific.js";
import { displayError } from "../ui/displayError.js";

const errorMessage = document.querySelector(".error-message");

export async function blogSpecificPage() {
	try {
		errorMessage.innerHTML = "";
		errorMessage.style.display = 'none';

		const url = new URL(location.href);
		let id = url.searchParams.get("id");

		const post = await getBlog(id);


		renderBlog(post);
		
	} catch (error) {
		//Developer console log
		console.log("Unable to fetch api", error);

		// User display
        errorMessage.innerHTML = displayError("fetch-error", `Unable to fetch blog post: ${error}`);
        errorMessage.style.display = 'block';
	}
}