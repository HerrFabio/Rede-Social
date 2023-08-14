
const modalController = document.getElementById('modalController');

function openModal(postId) {
  const postData = posts.find((post) => post.id == postId);

  if (!postData) {
    console.error(`Post with ID ${postId} not found.`);
    return;
  }

  const {
    user: userName,
    img: userImageSrc,
    stack: userOffice,
    title: postTitle,
    text: postContent,
  } = postData;

  const modalContent = `
    <div class="modal">
      <div class="modal__content">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal__img" src="${userImageSrc}" alt="${userName}" />
        <p class="modal__user">Author: ${userName}</p>
        <p class="modal__stack">Stack: ${userOffice}</p>
        <h2 class="modal__title text1--bold">${postTitle}</h2>
        <p class="modal__text">${postContent}</p>
      </div>
    </div>
  `;

  modalController.innerHTML = modalContent;
  modalController.showModal();
}

function closeModal() {
  modalController.close();
}

const postButtons = document.querySelectorAll('.buttonOpen__post');
postButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openModal(button.getAttribute('data-post-id')); 
  });
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  closeModal();
});

