export function renderCarousel(cards) {
    const trackContainer = document.querySelector(".carousel__track-container");
    const ulContainer = document.createElement("ul");
    ulContainer.classList.add("carousel__track");

    cards.forEach(postData => {
        const slideElement = document.createElement("li");
        slideElement.classList.add("carousel__slide");

        // Create a link element for each blog post
        const blogElement = document.createElement("a");
        blogElement.href = "/blog_specific/?id=" + postData.id;
        blogElement.dataset.id = postData.id;
        blogElement.classList.add("carousel__slide");

        // Container for the blog post
        const containerElement = document.createElement("section");

        // Check if the post has a featured image and create an img element
        const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        if (featuredMedia) {
            const img = document.createElement("img");
            img.src = featuredMedia;
            img.alt = postData.title.rendered; 
            img.classList.add("blog-img");
            containerElement.appendChild(img);
        }

        // Create a container for the text elements
        const containerText = document.createElement("div");
        containerText.classList.add("blog-text");

        // Create and append the title element
        const title = document.createElement("h3");
        title.textContent = postData.title.rendered;
        title.classList.add("blog-title");
        containerText.appendChild(title);

        containerElement.appendChild(containerText);

        // Append the container to the blog element
        blogElement.appendChild(containerElement);

        // Append the blog element to the slide
        slideElement.appendChild(blogElement);

        // Append the slide to the UL container
        ulContainer.appendChild(slideElement);
    });
console.log(cards);
    // Append the UL container to the track container
    trackContainer.appendChild(ulContainer);
}
