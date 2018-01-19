function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

function imageNodes() {
  var images = [];
  walk(document, function(node) {
    if (node instanceof HTMLImageElement) {
      images.push(node);
    }
  });
  return images;
}

function pngImages() {
  return imageNodes().filter(function(node) {
    return node.getAttribute('src').match('.png');
  });
}

console.log(imageNodes().length + ' image elements');
console.log(pngImages().length + ' png images');

(function redLinks() {
  var links = [];
  walk(document, function(node) {
    if (node instanceof HTMLAnchorElement) {
      links.push(node);
    }
  });
  links.forEach(function(link) {
    link.style.color = 'red';
  });
})();

console.log('Word counts for each h2 heading:')
var h2s = document.querySelectorAll('h2');

for (var i = 0; i < h2s.length; i++) {
  console.log(h2s[i].textContent.trim().split(' ').length);
}

var tableOfContents = document.getElementById('toc');
console.log(tableOfContents === document.getElementsByClassName('toc')[0]);
console.log(tableOfContents === document.querySelector('.toc'));

var tocLinks = [].slice.call(tableOfContents.querySelectorAll('a'));

tocLinks.forEach(function(link, index) {
  if (index % 2 === 0) {
    link.style.color = 'green';
  }
});

var thumbCaptions = [].slice.call(document.querySelectorAll('.thumbcaption'));
console.log(thumbCaptions.map( cap => cap.textContent.trim() ));

var taxonomy = {};

var kingdomRow = [].slice.call( document.querySelectorAll('tr') ).filter( tr => tr.textContent.match('Kingdom:') )[0];

var rankRow = kingdomRow;
var rank;
var value;

for (var i = 0; i < 8; i++) {
  rank = rankRow.firstElementChild.textContent.match(/[A-Za-z]+/)[0];
  value = rankRow.lastElementChild.textContent.trim();
  taxonomy[rank] = value;
  rankRow = rankRow.nextElementSibling;
}

console.log(taxonomy);
