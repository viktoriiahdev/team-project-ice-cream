'use strict';
const backdropHiddenClass = 'backdrop--is-hidden';
const backdrop = document.querySelector('[data-backdrop]');

const modalHiddenClass = 'modal--hidden';
const modalContent = document.querySelectorAll('.modal');

const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');

let modal;

function openModal() {
  modal = document.querySelector('[data-modal-' + this.dataset.content + ']');
  modal.classList.remove(modalHiddenClass);
  backdrop.classList.remove(backdropHiddenClass);
}

//закривать при кліку в будь-якому місці навколо модального вікна
function closeModal() {
  backdrop.classList.add(backdropHiddenClass);
  modal.classList.add(modalHiddenClass);
  if (!modal.classList.contains('modal--hidden')) {
    modalImg.removeAttribute('src');
  }
}

openModalBtn.forEach(btn => {
  btn.onclick = openModal;
});

closeModalBtn.forEach(btn => {
  btn.onclick = closeModal;
});

backdrop.addEventListener('click', closeModal);

//не закривать при кліку на модальному вікні
modalContent.forEach(el => {
  if (!el.classList.contains('modal--gallery'))
    el.onclick = function (event) {
      event.stopPropagation();
    };
});

// modal gallery
const modalImg = document.querySelector('[data-modal-image]');
const images = document.querySelectorAll('.gallery__image');

images.forEach(img => {
  img.onclick = openImage;
});

// відкривать зображення в модальному вікні
function openImage() {
  modalImg.src = this.src;
  modal = document.querySelector('[data-modal-' + this.dataset.content + ']');
  modal.classList.remove(modalHiddenClass);
  backdrop.classList.remove(backdropHiddenClass);
}
