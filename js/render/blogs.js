export function renderBlogs(postData) {
    const mainElement = document.querySelector(".blogposts");

    // Link element
    const blogElement = document.createElement("a");
    blogElement.href = "/blog_specific/?id=" + postData.id;
    blogElement.dataset.id = postData.id;
    

    // Container for the blog post
    const containerElement = document.createElement("div");
    blogElement.classList.add("blog-container");
    

// Check if the post has a featured image and create an img element
const featuredMedia = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;

if (featuredMedia) {
    const img = document.createElement("img");
    img.src = featuredMedia;
    img.alt = postData.title.rendered; 
    img.classList.add("blog-img"); 
    containerElement.appendChild(img);
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

// Append the container to the blog element
blogElement.appendChild(containerElement); // Only append containerElement


    // Append the blog element to the main container
    mainElement.appendChild(blogElement);
    
    
}


/* 
export function renderBlogs(postData, mediaData) {
    const mainElement = document.querySelector(".blogposts");
    console.log(mediaData);

    // Finn medieobjektet som matcher featured_media ID-en i postData
    const media = mediaData.find(mediaItem => mediaItem.id === postData.featured_media);

    const blogHTML = `
        <a href="/blogDetails/?id=${postData.id}" data-id="${postData.id}">
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
        <a href="/blogDetails/?id=${postData.id}" data-id="${postData.id}">
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


export function renderBlogs2(blogDetails) {
    const mainElement = document.querySelector(".blogposts");
    mainElement.innerHTML = "";
    blogDetails.forEach(renderBlogs);
    
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