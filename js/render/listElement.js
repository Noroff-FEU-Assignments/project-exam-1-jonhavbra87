/* export function listElement(isCarousel, trackContainer) {
    let listElement;
    if (isCarousel) {
        listElement = trackContainer.querySelector('.carousel__track');
        if (!listElement) {
            listElement = document.createElement("ul");
            listElement.classList.add("carousel__track");
            // Insert the carousel__track before the carousel__button--right
            const rightButton = trackContainer.querySelector('.carousel__button--right');
            trackContainer.insertBefore(listElement, rightButton);
        }
    } else {
        const blogContainer = document.createElement("div");
        blogContainer.classList.add("blog-container");
        listElement = document.createElement("ul");
        listElement.classList.add("blog-posts");
        blogContainer.appendChild(listElement);
        trackContainer.appendChild(blogContainer);
    }
} */