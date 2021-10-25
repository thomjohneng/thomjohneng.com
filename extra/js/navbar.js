window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var start = $(document).ready(function() {
  setTimeout(function() {
    $('#whiteBox').css('display', 'none');
  },4000);
  if ($('#mediumBox').hasClass('fadeIn')) {
    $('#mediumBox').toggleClass('fadeIn').toggleClass('fadeOut');
    $('#ramblingsButton').toggleClass('clicked');
    $('#aboutButton, #instaButton').toggleClass('transparent');
    setTimeout(function() {
      $('#mediumBox').css('display', 'none');
    },400);
  };
  if ($('#instaBox').hasClass('fadeIn')) {
    $('#instaBox').toggleClass('fadeIn').toggleClass('fadeOut');
    $('#instaButton').toggleClass('clicked');
    $('#aboutButton, #ramblingsButton').toggleClass('transparent');
    setTimeout(function() {
      $('#instaBox').css('display', 'none');
    },400);
  };
});

var about = $(document).ready(function() {
  $('#aboutButton').click(function() {
    $(this).toggleClass('clicked');
    $('#ramblingsButton, #instaButton').toggleClass('transparent');
    if ($('#aboutBox').hasClass('fadeIn')) {
      $('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
      setTimeout(function() {
        $('#aboutBox').css('display','none');
      },400);
    } else if ($('#aboutBox').hasClass('fadeOut')) {
      setTimeout(function() {
        $('#aboutBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
      },400);
    } else {
      setTimeout(function() {
        $('#aboutBox').toggleClass('fadeIn').css('display','block');
      },400);
    };
    if ($('#ramblingsButton').hasClass('clicked')) {
      $('#aboutButton, #instaButton').toggleClass('transparent');
      $('#ramblingsButton').toggleClass('clicked');
      if ($('#mediumBox').hasClass('fadeIn')) {
        $('#mediumBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#mediumBox').css('display','none');
        },200);
      };
    };
    if ($('#instaButton').hasClass('clicked')) {
      $('#aboutButton, #ramblingsButton').toggleClass('transparent');
      $('#instaButton').toggleClass('clicked');
      if ($('#instaBox').hasClass('fadeIn')) {
        $('#instaBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#instaBox').css('display','none');
        },200);
      };
    };
  });
});
var ramblings = $(document).ready(function() {
  $('#ramblingsButton').click(function() {
    $(this).toggleClass('clicked');
    $('#aboutButton, #instaButton').toggleClass('transparent');
    if ($('#mediumBox').hasClass('fadeIn')) {
      $('#mediumBox').toggleClass('fadeIn').toggleClass('fadeOut');
      setTimeout(function() {
        $('#mediumBox').css('display','none');
      },400);
    } else if ($('#mediumBox').hasClass('fadeOut')) {
      setTimeout(function() {
        $('#mediumBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
      },400);
    } else {
      setTimeout(function() {
        $('#mediumBox').toggleClass('fadeIn').css('display','block');
      },400);
    };
    if ($('#aboutButton').hasClass('clicked')) {
      $('#ramblingsButton, #instaButton').toggleClass('transparent');
      $('#aboutButton').toggleClass('clicked');
      if ($('#aboutBox').hasClass('fadeIn')) {
        $('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#aboutBox').css('display','none');
        },200);
      };
    };
    if ($('#instaButton').hasClass('clicked')) {
      $('#aboutButton, #ramblingsButton').toggleClass('transparent');
      $('#instaButton').toggleClass('clicked');
      if ($('#instaBox').hasClass('fadeIn')) {
        $('#instaBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#instaBox').css('display','none');
        },200);
      };
    };
  });
});
var insta = $(document).ready(function() {
  $('#instaButton').click(function() {
    $(this).toggleClass('clicked');
    $('#aboutButton, #ramblingsButton').toggleClass('transparent');
    if ($('#instaBox').hasClass('fadeIn')) {
      $('#instaBox').toggleClass('fadeIn').toggleClass('fadeOut');
      setTimeout(function() {
        $('#instaBox').css('display','none');
      },400);
    } else if ($('#instaBox').hasClass('fadeOut')) {
      setTimeout(function() {
        $('#instaBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
      },400);
    } else {
      setTimeout(function() {
        $('#instaBox').toggleClass('fadeIn').css('display','block');
      },400);
    };
    if ($('#aboutButton').hasClass('clicked')) {
      $('#ramblingsButton, #instaButton').toggleClass('transparent');
      $('#aboutButton').toggleClass('clicked');
      if ($('#aboutBox').hasClass('fadeIn')) {
        $('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#aboutBox').css('display','none');
        },200);
      };
    };
    if ($('#ramblingsButton').hasClass('clicked')) {
      $('#aboutButton, #instaButton').toggleClass('transparent');
      $('#ramblingsButton').toggleClass('clicked');
      if ($('#mediumBox').hasClass('fadeIn')) {
        $('#mediumBox').toggleClass('fadeIn').toggleClass('fadeOut');
        setTimeout(function() {
          $('#mediumBox').css('display','none');
        },200);
      };
    };
  });
});
