$(document).ready(function () {
  $('#my-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '30%',
    dots: false,
    centerMode: true,
    infinite: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
      ,
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: false
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          // centerMode: false
        }
      },
      {
        breakpoint: 3278,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#my-slider2').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    // centerPadding: '20%',
    dots: false,
    speed: 6500,
    cssEase: "linear",
    // centerMode: true,
    infinite: true,
    autoplaySpeed: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
      ,
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#my-slider3').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '20%',
    dots: false,
    speed: 6500,
    cssEase: "linear",
    // centerMode: true,
    infinite: true,
    autoplaySpeed: 0,
    autoplay: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
      ,
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#my-slider4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // centerPadding: '20%',
    dots: true,
    speed: 300,
    // centerMode: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});


$(document).ready(function () {
  $(".slick-list2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    // centerPadding : '70px',
    infinite: false,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          arrows : false,
          centerMode : false,
        }
      }
    ]
  });
  $(".prev-btn").click(function () {
    $(".slick-list").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".slick-list").slick("slickNext");
  });
  $(".prev-btn").addClass("slick-disabled");
  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
    } else {
      $(".next-btn").removeClass("slick-disabled");
    }
  });
});


const showVedio = document.querySelector('.modal-content iframe');

function sendData(getdata) {
  showVedio.src = getdata;
  console.log(getdata)
}


console.log()
