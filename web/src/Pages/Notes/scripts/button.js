const btn = document.getElementById('send');

btn.addEventListener('click', function send () {
  btn.classList.add('is-loading');
  // fake API call
  setTimeout( () => {
    btn.classList.add('is-success');
    btn.classList.remove('is-loading');
    setTimeout(() => {
        btn.classList.remove('is-success')
    }, 1500)
  }, 2000);
});