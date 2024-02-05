export function renderBlog(specificData) {

    // Selecting the container for blog posts
    const blogContainer = document.querySelector(".blog-details");
    if (!blogContainer) {
        console.error("Blog-details not found for the post: ", specificData);
        return;
    }
    // Creating the container for each blog post
    const postContainer = document.createElement("div");
    postContainer.classList.add("blog-post-container");

    // Adding the featured image if available
    const featuredMedia = specificData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = specificData.title.rendered;
        img.classList.add("blog-post-image");
        postContainer.append(img);
    }

    // Creating a container for the text elements
    const textContainer = document.createElement("div");
    textContainer.classList.add("blog-post-text-container");

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = specificData[0].title.rendered;
    title.classList.add("blog-post-title");
    textContainer.append(title);

    // Adding the text content
    const content = document.createElement("p");
    content.textContent = specificData.content.rendered;
    content.classList.add("blog-post-preamble");
    textContainer.append(content);

    // Adding the date
    const dateElement = document.createElement("time");
    const postDate = new Date(specificData.date);
    dateElement.textContent = postDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    dateElement.classList.add("blog-post-date");
    textContainer.append(dateElement);

    

    // Appending the text container to the blog post container
    postContainer.append(textContainer);

    // Appending the blog post container to the main blog container
    blogContainer.append(postContainer);

    document.title = `KIL Håndball | ${specificData.title}`;
}
