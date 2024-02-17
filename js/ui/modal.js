export function imageModal() {
	const modalContainer = document.querySelector(".page-content")
	modalContainer.querySelectorAll(".specific-img").forEach((img) => {
		img.style.cursor = "pointer";
		img.addEventListener("click", function () {
		  const modal = document.getElementById("imageModal");
		  const modalImg = document.getElementById("modalImage");
		  modal.style.display = "flex";
		  modalImg.src = this.src;
		  modalImg.alt = this.alt;
		});
	});

	const modal = document.getElementById("imageModal");
	const span = document.getElementsByClassName("close")[0];
	

		span.onclick = function () {
			modal.style.display = "none";
		  };
		  
		  window.onclick = function (event) {
			if (event.target == modal) {
			  modal.style.display = "none";
			}
		  };
}