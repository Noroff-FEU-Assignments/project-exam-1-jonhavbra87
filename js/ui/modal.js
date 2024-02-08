//Modal window


// export function initializeModal() {
//   const modal = document.querySelector('.modal');
//   const overlay = document.querySelector('.overlay');
//   const btnCloseModal = document.querySelector('.btn--close-modal');

//   if (!btnCloseModal) {
//       console.error('Close button not found!');
//       return;
//   }

//   // Function to open the modal
//   const openModal = function (imageSrc) {
//       const modalImage = modal.querySelector('img'); // Assuming there's an img tag inside the modal
//       modalImage.src = imageSrc;
//       modal.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//   };

//   // Function to close the modal
//   const closeModal = function () {
//       modal.classList.add('hidden');
//       overlay.classList.add('hidden');
//   };

//   btnCloseModal.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);

//   document.addEventListener('keydown', function (e) {
//       if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//           closeModal();
//       }
//   });

//   // Expose openModal function for external use
//   return { openModal };
// }


// export function initializeModal() {
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');

// if (!btnCloseModal) {
//   console.error('Close button not found!');
//   return;
// }

// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// if (!btnsOpenModal) {
//   console.error('Close button not found!');
//   return;
// }

// const openModal = function (e) {
//     e.preventDefault();
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   };
  
//   const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   };


//   btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  
//   btnCloseModal.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);
  
//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   });
// }

// export function initializeModal() {
//   const modal = document.querySelector('.modal');
//   const overlay = document.querySelector('.overlay');
//   const btnCloseModal = document.querySelector('.btn--close-modal');

//   if (!btnCloseModal) {
//       console.error('Close button not found!');
//       return;
//   }

//   // Open modal function
//   const openModal = function (imageSrc) {
//       // Set image source if provided
//       if (imageSrc) {
//           const modalImage = modal.querySelector('img'); // Assuming there's an img tag inside the modal
//           modalImage.src = imageSrc;
//       }
//       modal.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//   };

//   // Close modal function
//   const closeModal = function () {
//       modal.classList.add('hidden');
//       overlay.classList.add('hidden');
//   };

//   // Event listener for closing the modal
//   btnCloseModal.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);

//   // Escape key event listener
//   document.addEventListener('keydown', function (e) {
//       if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//           closeModal();
//       }
//   });

//   // Event Delegation for opening modal
//   document.body.addEventListener('click', function(e) {
//       if (e.target.matches('.btn--show-modal')) {
//           openModal(e.target.getAttribute('data-image-src')); // Assuming the button has a data attribute for the image source
//       }
//   });
// }
