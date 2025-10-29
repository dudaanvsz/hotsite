// Accordion interativo
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.accordion-content');
    const open = document.querySelector('.accordion-content.show');
    if(open && open !== content) {
      open.classList.remove('show');
      open.style.display = 'none';
    }
    content.classList.toggle('show');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
