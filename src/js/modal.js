(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// modal gallery
const backdrop = document.querySelector('[data-backdrop-gallery]');
const modal = document.querySelector('[data-modal-gallery]');
const modalImg = document.querySelector('[data-modal-image]');

const images = Array.from(document.getElementsByClassName('gallery__image'));

const hiddenClass = 'backdrop--is-hidden';

images.forEach(img => {
  img.onclick = function () {
    console.log('click');
    backdrop.classList.remove(hiddenClass);
    modalImg.src = img.src;
  };
});

backdrop.addEventListener('click', closeImage);

function openImage(img) {
  console.log('click');
  backdrop.classList.remove(hiddenClass);
  modalImg.src = img.src;
}

function closeImage() {
  if (!this.classList.contains('gallery__image')) backdrop.classList.add(hiddenClass);
}
