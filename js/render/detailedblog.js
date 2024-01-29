export function renderBlog(postData) {

    const mainElement = document.querySelector(".blog-details");
    
    // Blog element
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog-container");

    // Container for the blog post
    const containerElement = document.createElement("div");


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
    blogElement.appendChild(containerElement);

    if(mainElement) {
        mainElement.appendChild(blogElement);
    } else {
        console.error("mainElement not found");
    }

    
}


/* export function renderBlogs(postData) {
    const mainElement = document.querySelector(".blogposts");

    const blogHTML = `
        <a href="/blog_details/?id=${postData.id}" data-id="${postData.id}">
            <div>
                <h3 style="margin-top: 10px;">${postData.title.rendered}</h3>
                <span class="wp-img" >${postData.content.rendered}</span>
            </div>
        </a>
    `;

    mainElement.insertAdjacentHTML('beforeend', blogHTML);
}
 */