export function renderCarousel(postData) {
    const blogContainer = document.querySelector(".slider");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("div");
    postContainer.classList.add("slide");

    const innerContainer = document.createElement("div");
    innerContainer.classList.add("inner-container");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("carousel-image");
        innerContainer.append(img); // Appending to the list item
    }

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("carousel-title");
   //postContainer.append(title); 

    // Adding a read more button (anchortag)
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogdetails/?id=" + postData.id;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("carousel-button");
    // postContainer.append(readMoreButton); 

    innerContainer.append(title);
    innerContainer.append(readMoreButton);

    postContainer.append(innerContainer);
    // Appending the blog post container (ul element) to the main blog container
    blogContainer.append(postContainer);
}
