export function renderBlogs(postData, isCarousel = false) {

    const mainElement = document.querySelector(isCarousel ? ".carousel" : ".blogposts");

    if (!mainElement) {
        console.error("Main element not found for the post: ", postData);
        return; // Stop execution if mainElement is not found
    }
    
    // Blog element
    const blogElement = document.createElement("div");
    blogElement.classList.add(isCarousel ? "carousel__track-container" : "blog-container");

    // Container for the blog post
    const containerElement = document.createElement("div");


    // Check if the post has a featured image and create an img element
    const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    if (featuredMedia) {
        const img = document.createElement("img");
        img.src = featuredMedia;
        img.alt = postData.title.rendered;
        img.classList.add(isCarousel ? "carousel__track" : "blog-img");
        containerElement.appendChild(img);
    }

    // Create a container for the text elements
    const containerText = document.createElement("div");
      containerText.classList.add(isCarousel ? "carousel__slide" : "blog-text");

    // Create and append the title element
    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.classList.add("blog-title");
    containerText.appendChild(title);

    // Create and append the text element
    const text = document.createElement("span");
    text.innerHTML = postData.excerpt.rendered;
    containerText.appendChild(text); // Append to containerText
    containerElement.appendChild(containerText);

    // Create and append date for blogposts
    const dateElement = document.createElement("time");
    const postDate = new Date(postData.date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = postDate.toLocaleDateString("en-US", options);
    dateElement.classList.add("blog-time");
    containerText.appendChild(dateElement);


    // button element
    const buttonElement = document.createElement("a");
    buttonElement.href = "/blogdetails/?id=" + postData.id;
    buttonElement.dataset.id = postData.id;
    buttonElement.classList.add("blog-button");
    buttonElement.textContent = "Les mer";
    containerText.appendChild(buttonElement);

    // Append the container to the blog element
    blogElement.appendChild(containerElement);

    console.log("mainElement: ", mainElement);
    if(mainElement) {
        mainElement.appendChild(blogElement);
    } else {
        console.error("mainElement not found");
    }

    
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