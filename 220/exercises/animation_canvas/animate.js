$(function() {
  var shapes = []
  $('form').on('submit', function(e) {
    e.preventDefault();
    var inputs = $(this).serializeArray();
    var shapeType = inputs[0].value;
    var startX = inputs[1].value;
    var endX = inputs[2].value;
    var startY = inputs[3].value;
    var endY = inputs[4].value;
    console.log(shapeType, startX, endX, startY, endY);
    var $newShape = $(document.createElement('div'));
    $newShape.addClass(shapeType)
      .attr('data-endX', endX).attr('data-endY', endY);
    $newShape.css({
      'top': +startY,
      'left': +startX,
    })
    $('canvas').append($newShape);
  });
});