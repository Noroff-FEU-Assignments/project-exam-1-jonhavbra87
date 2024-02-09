export async function contactPage() {
    const contactContainer = document.querySelector(".text-container");

    if (contactContainer) {
        contactContainer.innerHTML = `
                                        `;
} else {
  //This console error is for developers:
    console.error('text-container not found in the HTML');
}
}
