const smoothScrollElems = document.querySelectorAll(
  'a[href^="#"]:not(a[href="#"])',
);

smoothScrollElems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const idRef = document.querySelector(id);
    idRef.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
