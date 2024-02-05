import { getBlog } from "../api/getBlog.js";
import { renderBlog } from "../render/blog.js";
// import { displayError } from "../displayError.js";

// const errorMessage = document.querySelector(".details");
// errorMessage.innerHTML = "";

export async function blogSpecificPage() {
	try {
		const url = new URL(location.href);
		// const params = Object.fromEntries(url.searchParams.entries());
		// console.log(params);
		// errorMessage.innerHTML = "";

		let id = url.searchParams.get("id");
		console.log(id);

		const post = await getBlog(id);
		console.log(post);

		renderBlog(post);
	} catch (error) {
		//This console log is for developers:
		console.log("Unable to fetch api", error);
		// errorMessage.innerHTML += displayError("Unable to fetch API", error);
	}
}