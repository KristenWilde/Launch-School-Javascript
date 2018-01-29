_ = function(obj) {
  var u = {
    uniq: function() {
      return obj.reduce(function(newAr, item) {
        if (newAr.indexOf(item) === -1) {
          newAr.push(item);
        }
        return newAr;
      }, []);
    },
    pluck: function(property) {
      return obj.map(item => item[property])
    },
  }
  return u;
}

var cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

var carsTemplate = Handlebars.compile($('#car_template').html()); 
var optionsTemplate = Handlebars.compile($('#options_template').html());


var app = {
  init: function() {
    this.displayOptions()
    this.displayCars();
    this.bindEvents();
  },

  bindEvents: function() {
    $('#make').on('change', function(e) {
      console.log($(this).val());
      app.displayOptions($(this).val());
    });

    $('form').on('submit', function(e) {
      e.preventDefault();
      app.displayCars();
    });
  },

  filters: function() {
    return {
      make: $('#make').val(), 
      model: $('#model').val(),
      price: $('#price').val(),
      year: $('#year').val(),
    } 
  },

  filteredCars: function(criteria){
    return cars.filter(function(car) {
      for (prop in criteria) {
        if (criteria[prop] === 'Any') {
          continue;
        } else if (criteria[prop] != car[prop]) {
          return false;
        }
      }
      return true;
    });
  },

  displayCars: function() {
    $('main').html(carsTemplate(app.filteredCars(app.filters())));
  },

  displayOptions: function(make) {
    var makeSelector = make ? '#make' : null;
    var criteria = make ? { make: make } : null;

    $('select').not(makeSelector).each(function() {
      var prop = this.id
      $(this).html(optionsTemplate([{ filterName : 'Any'} ]));
      $(this).append(optionsTemplate(app.getOptions(prop, criteria)));
    });
  },

  getOptions: function(prop, optionalCriteria) {
    var criteria = optionalCriteria || app.filters();

    var options =  _(_(app.filteredCars(criteria)).pluck(prop)).uniq();
    return options.map(function(opt) {
      return { filterName: opt }
    })
  },
}

app.init();