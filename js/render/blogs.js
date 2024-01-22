export function renderBlogs(postData) {
    const mainElement = document.querySelector(".blogposts");
    

    const blogElement = document.createElement("a");
    blogElement.href = "/blog/?id=" + postData.id;

    blogElement.dataset.id = postData.id;
    
    const containerElement = document.createElement("div");


    const title = document.createElement("h3");
    title.textContent = postData.title.rendered;
    title.style.marginTop = "10px";
    console.log(postData.title.rendered)

    const text = document.createElement ("p");
    text.textContent = postData.content.rendered;

/*     const buttonElement = document.createElement("a");
    buttonElement.classList.add("lesmer-button");
    buttonElement.innerHTML = `les mer`;
    buttonElement.href = "/blog_specific/?id=" + postData.id; */

    blogElement.append(containerElement, title, text);

    mainElement.append(blogElement);
    console.log(postData.title.rendered)
}

export function renderBlogs2(blogDetails) {
    const mainElement = document.querySelector(".blogposts");
    mainElement.innerHTML = "";
    blogDetails.forEach(renderBlogs);
}