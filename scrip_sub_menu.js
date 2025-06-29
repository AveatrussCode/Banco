const items = document.querySelectorAll('.desplegable');
const submenus = document.querySelectorAll('.submenu');

items.forEach(item => {
  const menuName = item.dataset.menu; // ej: "personas"

  item.addEventListener('mouseenter', () => {
    submenus.forEach(sub => {
      if (sub.dataset.menu === menuName) {
        sub.style.display = 'flex';
      } else {
        sub.style.display = 'none';
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      const submenu = document.querySelector(`.submenu[data-menu="${menuName}"]`);
      if (!submenu.matches(':hover')) {
        submenu.style.display = 'none';
      }
    }, 150);
  });
});

submenus.forEach(sub => {
  sub.addEventListener('mouseleave', () => {
    sub.style.display = 'none';
  });
});
