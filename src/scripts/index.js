const openPostButtons = document.querySelectorAll('.buttonOpen__post');


const modal = document.getElementById('postModal');
const closeButton = document.querySelector('.modal__closeButton');


function openModal(postData) {
  const {
    userName,
    userImageSrc,
    userOffice,
    postTitle,
    postContent,
  } = postData;


  const modalUserName = modal.querySelector('.card__userName');
  const modalUserImage = modal.querySelector('.card__image');
  const modalUserOffice = modal.querySelector('.card__office');
  const modalPostTitle = modal.querySelector('.modal__postTitle');
  const modalPostContent = modal.querySelector('.modal__postContent');

  modalUserName.textContent = userName;
  modalUserImage.src = userImageSrc;
  modalUserImage.alt = userName;
  modalUserOffice.textContent = userOffice;
  modalPostTitle.textContent = postTitle;
  modalPostContent.textContent = postContent;


  modal.showModal();
}


function closeModal() {
  modal.close();
}


openPostButtons.forEach((button) => {
  button.addEventListener('click', () => {
   
    const postData = {
      userName: 'Nome do Usuário',
      userImageSrc: './src/assets/img/userX.svg', 
      userOffice: 'Cargo do Usuário',
      postTitle: 'Título do Post',
      postContent: 'Conteúdo do Post...',
    };


    openModal(postData);
  });
});


closeButton.addEventListener('click', closeModal);
