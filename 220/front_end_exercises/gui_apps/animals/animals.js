document.addEventListener('DOMContentLoaded', function(){
  var timer;

  document.querySelector('main').addEventListener('mouseenter', function(e) {
    if (e.target.tagName === 'FIGURE') {
      timer = setTimeout(function(){
        e.target.lastElementChild.style.display = 'block';
      }, 2000);
    }
  }, true);

  document.querySelector('main').addEventListener('mouseleave', function(e) {
    clearTimeout(timer);
    if (e.target.tagName === 'FIGURE') {
      e.target.lastElementChild.style.display = 'none';
    }
  }, true);
});