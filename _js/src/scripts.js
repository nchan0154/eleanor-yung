var path = window.location.pathname;
if (path == '/' || path == '/index.php') {
  document.querySelector("body").classList.add('home');
}