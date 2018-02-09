function Autocomplete(textInput, url) {
  console.log('called new Autocomplete.')
  this.input = textInput;
  this.url = url;
  this.listUI = null;
  this.overlay = null;
  this.wrapInput();
  this.createUI();
  this.valueChanged = debounce(this.valueChanged.bind(this), 300)
  this.bindEvents();
  this.reset();
}

Autocomplete.prototype.bindEvents = function() {
  this.input.addEventListener('input', this.valueChanged.bind(this));
  this.input.addEventListener('keydown', this.handleKeydown.bind(this));
  this.listUI.addEventListener('click', this.mouseSelect.bind(this));
};

Autocomplete.prototype.mouseSelect = function(event){
  var li = event.target;
  this.input.value = li.textContent;
  this.reset();  
};

Autocomplete.prototype.handleKeydown = function(event){
  switch(event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1){
        this.selectedIndex = 0;
      } else {
        this.selectedIndex += 1;
      }
      this.bestMatchIndex = null;
      this.draw();
      break
    case 'ArrowUp':
      event.preventDefault();
      if (this.selectedIndex === null || this.selectedIndex === 0){
        this.selectedIndex = this.matches.length - 1;
      } else {
        this.selectedIndex -= 1;
      }
      this.bestMatchIndex = null;
      this.draw();
      break
    case 'Tab':
      if (this.bestMatchIndex !== null) {
        this.input.value = this.matches[this.bestMatchIndex].name;
        event.preventDefault();
      } 
      this.reset();
      break;
    case 'Enter':
      this.reset();
      break;
    case 'Escape':
      this.input.value = this.previousValue;
      this.reset();
      break;
  }
};

Autocomplete.prototype.valueChanged = function(event) {
  var value = this.input.value;
  this.previousValue = value;

  if (value.length > 0) {
    this.fetchMatches(value, function(matches){
      this.visible = true;
      this.matches = matches;
      this.bestMatchIndex = (matches.length > 0) ? 0 : null;
      this.selectedIndex = null;
      this.draw();
    }.bind(this));
  } else {
    this.reset();
  }
};

Autocomplete.prototype.fetchMatches = function(query, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    callback(request.response)
  }.bind(this));

  request.open('GET', this.url + encodeURIComponent(query));
  request.responseType = 'json';
  request.send();
};

Autocomplete.prototype.draw = function() { // renders the data in the listUI element.
  var child;
  while (child = this.listUI.lastChild) {
    this.listUI.removeChild(child);
  }

  if (!this.visible) {
    this.overlay.textContent = '';
    return;
  }

  if (this.bestMatchIndex != null) {
    console.log('bestMatchIndex: ' + this.bestMatchIndex);
    var selected = this.matches[this.bestMatchIndex];
    this.overlay.textContent = selected.name;
  } else {
    this.overlay.textContent = '';
  }

  this.matches.forEach(function(match, index) {
    var li = document.createElement('li');
    li.classList.add('autocomplete-ui-choice');

    if (index === this.selectedIndex) {
      li.classList.add('selected');
      this.input.value = match.name;
    }

    li.textContent = match.name;
    this.listUI.appendChild(li);
  }, this);
};

Autocomplete.prototype.reset = function() {
  this.visible = false;
  this.matches = [];  // the list of countries to display
  this.bestMatchIndex = null;
  this.selectedIndex = null;
  this.prevousValue = null;

  this.draw();
};

Autocomplete.prototype.wrapInput = function() {
  var wrapper = document.createElement('div');
  wrapper.classList.add('autocomplete-wrapper');
  this.input.parentNode.appendChild(wrapper);
  wrapper.appendChild(this.input);
};

Autocomplete.prototype.createUI = function() {
  var listUI = document.createElement('ul');
  listUI.classList.add('autocomplete-ui');
  this.input.parentNode.appendChild(listUI);
  this.listUI = listUI;

  var overlay = document.createElement('div');
  overlay.classList.add('autocomplete-overlay');
  overlay.style.width = this.input.clientWidth + 'px';

  this.input.parentNode.appendChild(overlay);
  this.overlay = overlay;
};
