export function renderCarousel(postData) {
    const blogContainer = document.querySelector(".carousel");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("div");
    postContainer.classList.add("carousel-container");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("blog-post-image");
        postContainer.append(img);
    }

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-post-title");
    postContainer.append(title);

    // Adding a read more button (anchortag)
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogdetails/?id=" + postData.id;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("blog-post-button");
    postContainer.append(readMoreButton);


    // Appending the blog post container to the main blog container
    blogContainer.append(postContainer);
}