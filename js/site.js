(() => {
  const menu = document.getElementById('site-menu');
  const nav = document.getElementById('site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const search = document.getElementById('site-search-form');
  if (search) {
    search.addEventListener('submit', event => {
      event.preventDefault();
      let status = document.getElementById('site-feedback');
      if (!status) {
        status = document.createElement('p');
        status.id = 'site-feedback';
        status.setAttribute('role', 'status');
        status.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:100;background:#30263e;border:1px solid #59466e;color:#eee;padding:12px 16px;border-radius:3px;max-width:calc(100% - 36px);box-shadow:0 4px 18px #0006';
        document.body.appendChild(status);
      }
      status.textContent = 'Search is not connected in this static preservation.';
    });
  }

  document.querySelectorAll('[data-static-account-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.parentElement.querySelector('.account-status');
      if (status) status.textContent = 'This is a static recreation. No information was sent or saved; account creation and sign-in need the original Nozomi backend.';
    });
  });
})();
