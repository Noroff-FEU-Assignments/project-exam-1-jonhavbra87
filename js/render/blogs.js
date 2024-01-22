export function renderBlogs(blogData) {
    const mainElement = document.querySelector(".blogposts");
    

    const blogElement = document.createElement("a");
    blogElement.href = "/blog/?id=" + blogData.id;

    blogElement.dataset.id = blogData.id;

    const containerElement = document.createElement("div");


    const title = document.createElement("h3");
    title.textContent = blogData.title[0].rendered;
    title.style.marginTop = "10px";



    const buttonElement = document.createElement("a");
    buttonElement.classList.add("lesmer-button");
    buttonElement.innerHTML = `les mer`;
    buttonElement.href = "/checkout/?id=" + blogData.id;


    blogElement.append(containerElement, title, buttonElement);

    mainElement.append(blogElement);
}

export function renderBlogs(blogDetails) {
    const mainElement = document.querySelector(".blogposts");
    mainElement.innerHTML = "";
    blogDetails.forEach(renderBlogs);
}