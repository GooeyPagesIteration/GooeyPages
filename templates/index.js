$.getJSON("http://cpv2api.com/posts/published/j-w-v", function(resp) {
  if (resp.success) {
    for (var i = 0; i < resp.data.length; i++) {
      $('.posts ul').append('<li><a target="_blank" href="#">' + resp.data[i].title + ' <span> ' + resp.data[i].views + ' views</span> </a></li>');
    }
  }
});
$.getJSON("http://cpv2api.com/pens/showcase/j-w-v", function(resp) {
  if (resp.success) {
    for (var i = 0; i < 5; i++) {
      $('.pens ul').append('<li><a target="_blank" href="#">' + resp.data[i].title + ' <span> ' + resp.data[i].views + ' views</span> </a></li>');
    }
  }
});



// DRAG AND DROP////////////////////////////////
// NOTE :
// /////////////////////////////////////////////

// Initialize sorting zone
var $result = $('#sortable');
var $location = $('div.ui-state-highlight ');

$("#draggableIMAGE").draggable({
  opacity: 0.7,
  helper: "clone",
  revert: "invalid"
});
$("#draggableTEXT").draggable({
  opacity: 0.7,
  helper: "clone",
  revert: "invalid"
});
$('#draggableCOL').draggable({
  opacity: 0.7,
  helper: "clone",
  revert: "invalid"
});


// GUI TOOLS ///////////////////////////////
// NOTES :  These are a series of 'getters'
//           and setters for the features
// /////////////////////////////////////////
$tmp = $("#set div").get(0);
// GUI TEMPLATE UI//////////////////////////////
// NOTE :
// /////////////////////////////////////////////
$("#set div").draggable({

  start: function(event, ui) {
    //Store info in a tmp div
    jQuery.data($tmp, "isNew", true);
    jQuery.data($tmp, "resultHTML", "<P>PARAGRAPGH YO</P>");
  },

  helper: function(event) {
    return "<div class='custom-helper'>Custom helper for " + $(this).context.innerHTML + "</div>";
  },

  stop: function(event, ui) {
    var nodeID = event.target.attributes[0].value;
    var newNode;
    $('.custom-helper').remove();
    //JOSH change to add li
    if (nodeID === 'draggableTEXT') {
      newNode = $('<li><p>Lorem</p></li>');
      // $('#grid').append($newNode);
      gridster.add_widget.apply(gridster, newNode);
    } else if (nodeID === 'draggableIMAGE') {
      newNode = $('<li><img class=\'soratable\'src=\'http://wristgeek.com/wp-content/uploads/2014/09/hello_world.png\'/><li>');
      // $result.append(newNode);
      gridster.add_widget.apply(gridster, newNode);
    } else if (nodeID === 'draggableCOL') {
      newNode = '<div class=\'ui-state-default sortable row\' id=\'newHalf\'></div>';
      $("#twoCol").clone().appendTo("#sortable");
      $(ui.helper.location).append('<p>;alsdkfj</p>');
      console.log(($(ui.helper[0])));
      $result.append(newNode);
    }
  },
  revert: "invalid"
});

function removeHelper(event) {
  return $('custom-helper').remove();
}

// SHOW HIDE GRID////////////////////////////////////
// NOTE : Simple event listener to add class to the users web template.
// Makes editable fields easier to see for certain templates
// /////////////////////////////////////////////
$("#show").click(function() {

  if ($("#show").hasClass("active")) {
    $('#grid li, #show').removeClass('active');

  } else {
    $("#grid li, #show").addClass("active");
  }
});
var gridster;

$(function() {

  gridster = $(".gridster > ul").gridster({
    widget_margins: [5, 5],
    widget_base_dimensions: [200, 200],
    resize: {enabled:true}
  }).data('gridster');

  var widgets = [
    ['<li><h1 contenteditable="true">Joseph William Victory</h1></li>', 1, 1],
    ['<li><h2> Web Developer</h2></li>', 1, 1],
    ['<li><div class="pens pulled"><h1 contenteditable="true">Pens</h1><ul></ul></div></li>', 1, 1],
    ['<li><div class="posts pulled"><h1 contenteditable="true">Posts</h1><ul class="sortable"></ul></div></li>', 1, 1],
    ['<li>4</li>', 1, 1],
    ['<li>5</li>', 1, 1],
    ['<li>6</li>', 1, 1],
    ['<li>7</li>', 1, 1],
    ['<li>8</li>', 1, 1],
    ['<li>9</li>', 1, 1],
    ['<li>10</li>', 1, 1]
  ];

  $.each(widgets, function(i, widget) {
    gridster.add_widget.apply(gridster, widget);
  });

});
