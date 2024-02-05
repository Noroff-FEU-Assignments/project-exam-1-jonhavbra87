const loader = document.querySelector(".lds-spinner");

export function renderCarousel(postData) {
    loader.innerHTML = "";
    
    const blogContainer = document.querySelector(".slider");
    if (!blogContainer) {
        console.error("Blog container not found for the post: ", postData);
        return;
    }

    // Creating the container for each blog post
    const postContainer = document.createElement("div");
    postContainer.classList.add("slide");

    // const innerContainer = document.createElement("div");
    // innerContainer.classList.add("inner-container");

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
   //postContainer.append(title); 

    // Adding a read more button (anchortag)
    const readMoreButton = document.createElement("a");
    readMoreButton.href = "/blogdetails/?id=" + postData.id;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("carousel-button");
    // postContainer.append(readMoreButton); 

    textContainer.append(title);
    textContainer.append(readMoreButton);


    // innerContainer.append(textContainer);

    postContainer.append(textContainer);


    blogContainer.append(postContainer);
}
