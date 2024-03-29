const loader = document.querySelector(".lds-spinner");

export function renderBlogs(postData) {
    loader.innerHTML = "";
    loader.style.display = "none";

    // Selecting the container for blog posts
    const blogContainer = document.querySelector(".blog-posts");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("article");
    postContainer.classList.add("blog-post-container");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("blog-post-img");
        postContainer.append(img);
    }

    const textContainer = document.createElement("div");
    textContainer.classList.add("blog-post-text-container");

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-post-title", "word-wrapping");
    textContainer.append(title);

    // Adding the text excerpt
    const preamble = document.createElement("p");
    preamble.innerHTML = postData.excerpt.rendered;
    preamble.classList.add("blog-post-preamble");
    textContainer.append(preamble);

    // Adding the date
    const dateElement = document.createElement("time");
    const postDate = new Date(postData.date);
    dateElement.textContent = postDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    dateElement.classList.add("blog-post-date");
    textContainer.append(dateElement);

    // Adding a read more button
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogspecific/?id=" + postData.id;
    readMoreButton.textContent = "Les mer";
    readMoreButton.classList.add("blog-post-button", "font-weight-600", "uppercase", "letter-spacing");
    textContainer.append(readMoreButton);


    postContainer.append(textContainer);
    
    blogContainer.append(postContainer);
}
