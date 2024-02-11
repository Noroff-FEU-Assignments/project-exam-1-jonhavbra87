const loader = document.querySelector(".lds-spinner");

export function renderBlog(specificData) {
	loader.innerHTML = "";
	loader.style.display = "none";

	// Selecting the container for blog posts
	const blogContainer = document.querySelector(".blog-details");
	if (!blogContainer) {
		console.error("Blog-details not found for the post: ", specificData);
		return;
	}
	// Creating the container for each blog post
	const postContainer = document.createElement("div");
	postContainer.classList.add("blog-post-specific", "justified-center", "flex-column", "margin-top");

	// Adding the featured image if it is available
	const featuredMedia =
		specificData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
	if (featuredMedia) {
		const img = document.createElement("img");
		img.src = featuredMedia;
		img.alt = specificData.title.rendered;
		img.classList.add("specific-img");
		postContainer.append(img);
	}

	// Creating a container for the text elements
	const textContainer = document.createElement("div");
	textContainer.classList.add("blog-post-text-container", "color-dark");

	// Adding the title
	const title = document.createElement("h3");
	title.textContent = specificData.title.rendered;
	title.classList.add("blog-post-title", "text-animation", "margin-bottom", "center");
	textContainer.append(title);

	// Adding the text content
	const content = document.createElement("div");
	content.innerHTML = specificData.content.rendered;
	content.classList.add("blog-post-preamble", "margin-bottom");
	textContainer.append(content);

	// Adding the date
	const dateElement = document.createElement("time");
	const postDate = new Date(specificData.date);
	dateElement.textContent = postDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	dateElement.classList.add("blog-post-date");

	textContainer.append(dateElement);

	postContainer.append(textContainer);

	blogContainer.append(postContainer);


	postContainer.querySelectorAll(".specific-img").forEach((img) => {
		img.style.cursor = "pointer";
		img.addEventListener("click", function () {
		  const modal = document.getElementById("imageModal");
		  const modalImg = document.getElementById("modalImage");
		  modal.style.display = "flex";
		  modalImg.src = this.src;
		});
	});

	const modal = document.getElementById("imageModal");
	const span = document.getElementsByClassName("close")[0];
	

		span.onclick = function () {
			modal.style.display = "none";
		  };
		  
		  window.onclick = function (event) {
			if (event.target == modal) {
			  modal.style.display = "none";
			}
		  };

		  document.title = `KIL | ${specificData.title.rendered}`;
}