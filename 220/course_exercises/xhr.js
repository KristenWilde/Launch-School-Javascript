// With responseType

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'text'
request.addEventListener('load', function(e) {
  var data = request.response;
  console.log(request.status);
  console.log(data.open_issues || 'The request could not be completed!');
});
request.send();