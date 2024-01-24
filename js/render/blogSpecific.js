/* export function renderBlogs(postData) {
    const mainElement = document.querySelector(".blogposts");

    const blogHTML = `
        <a href="/blogDetails/?id=${postData.id}" data-id="${postData.id}">
            <div>
                <h3 style="margin-top: 10px;">${postData.title.rendered}</h3>
                <span class="wp-img" >${postData.content.rendered}</span>
            </div>
        </a>
    `;

    mainElement.insertAdjacentHTML('beforeend', blogHTML);
}
 */