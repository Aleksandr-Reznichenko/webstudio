const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('[data-modal]');

function openModal() {
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // disable page scrolling
}

function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = ''; // restore page scrolling
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close on backdrop click (but not on modal click)
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
    closeModal();
  }
});
