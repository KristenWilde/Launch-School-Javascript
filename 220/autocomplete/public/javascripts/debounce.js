function debounce(func, delay) {
  var timeout;

  return function() {
    var args = arguments;
    if (timeout) {
      console.log('Clearing timeout key ' + timeout)
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      func.apply(null, args);
    }, delay);
    console.log('Setting timeout key ' + timeout);
  };
}