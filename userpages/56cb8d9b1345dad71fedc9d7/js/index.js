
// DYNAMIC DATA FOR DEMO THEME////////////////////////////////////
// NOTE : Used theme from other resource and pulled in the info
// /////////////////////////////////////////////
$.getJSON("http://cpv2api.com/posts/published/j-w-v", function(resp){
	if(resp.success){
		for (var i = 0; i < resp.data.length; i++) {
    $('.posts ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
    }
	}
});

$.getJSON("http://cpv2api.com/pens/showcase/j-w-v", function(resp){
	if(resp.success){
		for (var i = 0; i < 5; i++) {
    $('.pens ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
    }
	}
});

// ANIMATION LIBRARY////////////////////////////////////
// NOTE : Background animation for demo theme
// /////////////////////////////////////////////
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 33,
      "density": {
        "enable": true,
        "value_area": 1420.4657549380909
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.06313181133058181,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 11.83721462448409,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


  // DOM USER INTERACTION LOGIC////////////////////////////////////
  // NOTE : jQuery methods to manipulate the users input and to render ui
  //        changes.
  // /////////////////////////////////////////////


	$( "#draggableIMAGE" ).draggable({
      connectToSortable: ".container",
      opacity: 0.7,
      helper: "clone",
      revert: "invalid"
    });

  $( "#draggableTEXT" ).draggable({
      connectToSortable: ".container",
      opacity: 0.7,
      helper: "clone",
      revert: "invalid"
    });

    $('#draggableCOL').draggable({
        connectToSortable: ".container",
        opacity: 0.7,
        helper: "clone",
        revert: "invalid"
    });

		$( "li" ).sortable({
			connectWith: ".container",
			placeholder: "ui-state-highlight"
		});

    $( ".container" ).sortable({
      connectWith: ".container",
			placeholder: "ui-state-highlight"
    });


    // GUI TOOLS ///////////////////////////////
    // NOTES :  These are a series of 'getters'
    //           and setters for the features
    // /////////////////////////////////////////
    $tmp = $("#set div").get(0);



		// GUI SORTABLE////////////////////////////////////
		// NOTES :  Initialize Drop field and manage life
		// cycles
		// /////////////////////////////////////////////
    $("#sortable").sortable({
        placeholder: "ui-state-highlight ",

        stop: function(event, ui) {
            console.log("isNew : ", jQuery.data($tmp, "isNew"));
            console.log("resultHTML : ", jQuery.data($tmp, "resultHTML"));
        },

        change: function(event, ui) {
            var pos = ui.helper.index() < ui.placeholder.index()
                ? { start: ui.helper.index(),
                      end: ui.placeholder.index()
                  }
                : { start: ui.placeholder.index(),
                      end: ui.helper.index()
                  }
            $(this)
                .children().removeClass( 'highlight' )
                .not( ui.helper ).slice( pos.start, pos.end ).addClass( 'highlight' );
        }
    });



    // GUI TEMPLATE UI//////////////////////////////
    // NOTE : Initialize Tools for GUI
    // /////////////////////////////////////////////
    $("#set div").draggable({
        connectToSortable: "#sortable",

        start: function(event, ui) {
          //Store info in a tmp div
          jQuery.data($tmp, "isNew", true);
          jQuery.data($tmp, "resultHTML", "<P>PARAGRAPGH YO</P>");

        },

        helper: function(event) {
          return "<div class='custom-helper'>Custom helper for " + $(this).context.innerHTML + "</div>";
        },

        stop: function( event, ui ) {
          var nodeID = event.target.attributes[0].value;
          var newNode;

          $('.custom-helper').remove();

          if ( nodeID === 'draggableTEXT' ) {
                newNode = '<p class=\'portlet\'>Lorem ipsum dolor sit amet, vim ei dicta voluptatum cotidieque, dicam dolore ne his, te case detraxit est. Mucius salutatus repudiandae ex pri, agam ocurreret quo ea. Usu no alterum percipitur persequeris. Pro falli elaboraret an, vel no brute eligendi splendide. Eros discere scriptorem duo id. Te zril dicunt moderatius qui, sed ei quem vide nusquam, ex tota paulo aeterno pro.</p>';
                $result.append(newNode);

            } else if ( nodeID === 'draggableIMAGE' ) {
              newNode ='<img src=\'/Users/robertrosario/Downloads/winning.gif\'/>';
              $result.append(newNode);

            } else if ( nodeID === 'draggableCOL'){
              newNode = '<div class=\'sortable row\' id=></div>';
              // $( "#twoCol" ).clone().appendTo( "#sortable" );
              // $(ui.helper.location).append('<p>;alsdkfj</p>');
              console.log(ui.helper);
              $result.append(newNode);
            }

        },
        revert: "invalid"
    });


    // SHOW HIDE GRID////////////////////////////////////
		// NOTE : Simple event listener to add class to the users web template.
		// Makes editable fields easier to see for certain templates
		// /////////////////////////////////////////////
    $( "#grid" ).click(function() {

			  if ($( "#grid" ).hasClass( "active" )) {
			    $('#particles-js div, #grid').removeClass('active');

			  }
				else {
				  // $('div').css('border', '1px solid white');
					$( "#particles-js div, #grid" ).addClass( "active" )
				}
			 	console.log('fired');
    });

	// });
