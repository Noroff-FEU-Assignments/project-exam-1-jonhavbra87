export function renderCarousel(postData) {
    const blogContainer = document.querySelector(".carousel");
    // if (!blogContainer) {
    //     console.error("Blog container not found for the post: ", postData);
    //     return;
    // }

    // Creating the container for each blog post (ul element)
    const postContainer = document.createElement("ul");
    postContainer.classList.add("carousel-track-container");

    // Creating the list item (li element)
    const listItem = document.createElement("li");
    listItem.classList.add("carousel-slide");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("blog-post-image");
        listItem.append(img); // Appending to the list item
    }

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-post-title");
    listItem.append(title); // Appending to the list item

    // Adding a read more button (anchortag)
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogdetails/?id=" + postData.id;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("blog-post-button");
    listItem.append(readMoreButton); // Appending to the list item

    // Appending the list item to the post container (ul element)
    postContainer.append(listItem);

    // Appending the blog post container (ul element) to the main blog container
    blogContainer.append(postContainer);
}
