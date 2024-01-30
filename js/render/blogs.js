/* export function renderBlogs(postData, isCarousel = false) {
    // Selecting the specific container based on whether it's a carousel or blogposts
    const specificContainer = document.querySelector(isCarousel ? ".carousel .carousel__track-container" : ".blogposts");
    if (!specificContainer) {
        console.error("Specific container not found for the post: ", postData);
        return;
    }

    // Handling the list element
    let listElement;
    if (isCarousel) {
        // For carousel, find or create the ul with class "carousel__track"
        listElement = specificContainer.querySelector('.carousel__track') || document.createElement("ul");
        listElement.classList.add("carousel__track");
    } else {
        // For blog posts, create a new div and ul each time
        const blogContainer = document.createElement("div");
        blogContainer.classList.add("blog-container");
        listElement = document.createElement("ul");
        listElement.classList.add("blog-posts");
        blogContainer.appendChild(listElement);
        specificContainer.appendChild(blogContainer);
    } */

    export function renderBlogs(postData, isCarousel = false) {
        const trackContainer = document.querySelector(isCarousel ? ".carousel .carousel__track-container" : ".blogposts");
        if (!trackContainer) {
            console.error("Track container not found for the post: ", postData);
            return;
        }
    
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
    
        // Creating and appending list item (li)
        const listItem = document.createElement("li");
        listItem.classList.add(isCarousel ? "carousel__slide" : "blog-post");

    // Adding the featured image if available
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add(isCarousel ? "carousel__image" : "blog-img");
        listItem.appendChild(img);
    }

    // Creating a container for text elements
    const textContainer = document.createElement("div");

    // Adding the title
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-title");
    textContainer.appendChild(title);

    // Adding the text excerpt
    const text = document.createElement("span");
    text.innerHTML = postData.excerpt.rendered;
    textContainer.appendChild(text);

    // Adding the date for blog posts
    const dateElement = document.createElement("time");
    const postDate = new Date(postData.date);
    dateElement.textContent = postDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    dateElement.classList.add("blog-date");
    textContainer.appendChild(dateElement);

    // Adding a button
    const buttonElement = document.createElement("a");
    buttonElement.href = "/blogdetails/?id=" + postData.id;
    buttonElement.textContent = "Read More";
    buttonElement.classList.add("blog-button");
    textContainer.appendChild(buttonElement);

    // Appending the text container to the list item
    listItem.appendChild(textContainer);

    // Appending the list item to the ul element
    listElement.appendChild(listItem);

    
    // For carousel, append the ul element to the container only if it's newly created
/*     if (isCarousel && !specificContainer.querySelector('.carousel__track')) {
        specificContainer.appendChild(listElement);
    } */

}



/* 
export function renderBlogs(postData, mediaData) {
    const mainElement = document.querySelector(".blogposts");
    console.log(mediaData);

    // Finn medieobjektet som matcher featured_media ID-en i postData
    const media = mediaData.find(mediaItem => mediaItem.id === postData.featured_media);

    const blogHTML = `
        <a href="/blog_details/?id=${postData.id}" data-id="${postData.id}">
            <div>
                <h3 style="margin-top: 10px;">${postData.title.rendered}</h3>
                ${media ? `<img src="${media.source_url}" alt="Blog image">` : ''}
                <span>${postData.excerpt.rendered}</span>
                <time>${new Date(postData.date).toLocaleDateString()}</time>
            </div>
        </a>
    `;

    mainElement.insertAdjacentHTML('beforeend', blogHTML);
}
 */


/* export function renderBlogs(postData, mediaUrl) {
    const mainElement = document.querySelector(".blogposts");
    const media = mediaData.find(media => media.id === postData.featured_media);

    const blogHTML = `
        <a href="/blog_details/?id=${postData.id}" data-id="${postData.id}">
            <div>
                <h3 style="margin-top: 10px;">${postData.title.rendered}</h3>
                ${media ? `<img src="${media.source_url}" alt="Blog image">` : ''}
                <span>${postData.excerpt.rendered}</span>
                <time>${new Date(postData.date).toLocaleDateString()}</time>
            </div>
        </a>
    `;

    mainElement.insertAdjacentHTML('beforeend', blogHTML);
}
 */


/* export function renderBlogs(postData) {
    const mainElement = document.querySelector(".blogposts");
    

    const blogElement = document.createElement("a");
    blogElement.href = "/blog_specific/?id=" + postData.id;

    blogElement.dataset.id = postData.id;
    
    const containerElement = document.createElement("div");


    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.style.marginTop = "10px";
   


    const text = document.createElement ("span");
    text.innerHTML = postData.content.rendered;
    title.classList.add("wp-img")


    blogElement.append(containerElement, title, text);

    mainElement.append(blogElement);

}


export function renderBlogs2(blog_details) {
    const mainElement = document.querySelector(".blogposts");
    mainElement.innerHTML = "";
    blog_details.forEach(renderBlogs);
    
} 
 */
//renderBlogs2(renderBlogs).then(console.log)

/* 
const template =     `
<div class="card">
<img src="" alt="" class="card-img" />
<div class="card-body">I am a product</div>
<div class="card-footer">
  <div class="card-title"></div>
  <div class="card-preamble"></div>
  <button class="btn read-more"></button>
  </div>
</div>
</div>
`

function getSrcFromPost(blogData) {
    return productData.images[0].src
}

export async function renderBlogs(postData) {
    const container = document.querySelector("div");

      container.innerHTML += template;
  
    const img = container.querySelector("img");
    const title = container.querySelector(".card-title");

}

export function createPosts(postData) {
    const post = document.createElement("div");
    post.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card img");
}

//render.innerHTML += postData.content.rendered; */