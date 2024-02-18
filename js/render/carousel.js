const loader = document.querySelector(".lds-spinner");

export function renderCarousel(postData) {
    loader.innerHTML = "";
    loader.style.display = "none";
    
    const blogContainer = document.querySelector(".slider");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("article");
    postContainer.classList.add("slide");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add("carousel-image");
        postContainer.append(img);
    }
    const textContainer = document.createElement("div");
    textContainer.classList.add("carousel-text-container");

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("carousel-title");


    // Adding a read more button
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogspecific/?id=" + postData.id;
    readMoreButton.classList.add("carousel-button");

    const svgImage = document.createElement("img");
    svgImage.src = "/images/hummelarrows.svg"; 
    svgImage.alt = "pil for å kome til nyhten"; 

    readMoreButton.append(svgImage);

    textContainer.append(title);
    textContainer.append(readMoreButton);



    postContainer.append(textContainer);


    blogContainer.append(postContainer);
}
