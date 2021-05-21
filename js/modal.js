const moreElem = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
};
const closeModal = () => {
  modalElem.classList.add('hidden');
};

moreElem.forEach(btn => btn.addEventListener('click', openModal));
modalElem.addEventListener('click', event => {
  const targetClass = event.target.classList;
  if (targetClass.contains('overlay') || targetClass.contains('modal__close')) {
    closeModal();
  }
});
