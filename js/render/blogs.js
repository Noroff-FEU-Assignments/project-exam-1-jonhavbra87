export function renderBlogs(postData) {
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