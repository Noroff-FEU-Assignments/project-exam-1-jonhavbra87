const loader = document.querySelector(".lds-spinner");

export function renderBlogs(postData) {
    loader.innerHTML = "";
    
    // Selecting the container for blog posts
    const blogContainer = document.querySelector(".blog-posts");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("div");
    postContainer.classList.add("blog-post-container");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("blog-post-image");
        postContainer.append(img);
    }

    // Creating a container for the text elements
    const textContainer = document.createElement("div");
    textContainer.classList.add("blog-post-text-container");

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-post-title");
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
    readMoreButton.href = "/blogdetails/?id=" + postData.id;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("blog-post-button");
    textContainer.append(readMoreButton);

    // Appending the text container to the blog post container
    postContainer.append(textContainer);

    // Appending the blog post container to the main blog container
    blogContainer.append(postContainer);
}
