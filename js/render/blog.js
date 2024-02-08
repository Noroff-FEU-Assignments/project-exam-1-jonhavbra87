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
		//create button
		const modalButton = document.createElement("button");
    modalButton.textContent = "View Image"; // Or use any text/icon you prefer
    modalButton.classList.add("btn--open-modal");
	
	
	const modal = createModal();
    postContainer.appendChild(modal);
	//add eventListener
		img.addEventListener('click', function() {
			openModal(featuredMedia);
		});
		postContainer.append(img, modalButton);
	}

	// Creating a container for the text elements
	const textContainer = document.createElement("div");
	textContainer.classList.add("blog-post-text-container", "color-dark");

	// Adding the title
	const title = document.createElement("h3");
	title.textContent = specificData.title.rendered;
	title.classList.add("blog-post-title", "text-align-center");
	textContainer.append(title);

	// Adding the text content
	const content = document.createElement("div");
	content.innerHTML = specificData.content.rendered;
	content.classList.add("blog-post-preamble");
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

	document.title = `KIL | ${specificData.title.rendered}`;
}

function createModal() {
    const modal = document.createElement('div');
    modal.id = "imageModal";
    modal.classList.add("modal");

    const closeSpan = document.createElement('span');
    closeSpan.classList.add("close");
    closeSpan.innerHTML = "&times;";
    modal.appendChild(closeSpan);

    const modalImage = document.createElement('img');
    modalImage.classList.add("modal-content");
    modalImage.id = "modalImage";
    modal.appendChild(modalImage);

    const caption = document.createElement('div');
    caption.id = "caption";
    modal.appendChild(caption);

    return modal;
}
// Opening the modal
modalButton.addEventListener('click', function() {
    const modal = postContainer.querySelector('#imageModal');
    const modalImg = postContainer.querySelector('#modalImage');
    const captionText = postContainer.querySelector('#caption');

    modal.style.display = "block";
    modalImg.src = featuredMedia;
    captionText.innerHTML = img.alt;
});

// Closing the modal
const span = postContainer.querySelector(".close");
span.onclick = function() { 
    modal.style.display = "none";
}
