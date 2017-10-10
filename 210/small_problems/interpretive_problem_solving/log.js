function log() {
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(example) {
    console.log(example);
  });
}