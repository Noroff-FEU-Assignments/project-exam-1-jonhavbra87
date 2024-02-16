import { blogsPage } from "../pages/blogs.js";
import { blogSpecificPage } from "../pages/blogspecific.js";
import { createCarousel } from "../pages/homePage.js";
import { formValidator } from "../ui/forms.js";
import { loadMorePosts } from "../ui/loadMorePosts.js";
import { imageModal } from "../ui/modal.js";


//////////////////// ROUTER ///////////////////////////

export async function router() {
    switch (window.location.pathname) {
        case "/about/":
        case "/about":
        case "/about/index.html":
        imageModal();
    break;
        case "/blogs/":
        case "/blogs":
        case "/blogs/index.html":
            blogsPage();
            loadMorePosts();
    break;
        case "/blogspecific/":
        case "/blogspecific":
        case "/blogspecific/index.html":
            await blogSpecificPage();
    break;
        case "/contact/":
        case "/contact":
        case "contact/index.html":
            imageModal();
            const form = document.querySelector("#contactForm");
            form.addEventListener("submit", formValidator);
    break;
        case "/newslettersuccsess/":
        case "/newslettersuccsess":
        case "/newslettersuccsess/index.html":
            setTimeout(function() {
                window.location.href = '/index.html';
            }, 5000);
    break
        case "/":
        case "index.html":
            return createCarousel();
    default:
        console.log("404 - not found")
    };
}


//////////////////// ROUTER END ///////////////////////////