export const MainJS = () => {
  'use strict'
  var brandLoadingTime = 3000,
    progressPercent = 0,
    progressBar
  // var $loadingWrap = document.getElementById('loading'),
  //     $progressLoading = $loadingWrap.querySelector('.progressLoading'),
  //     $messageLoading = $loadingWrap.querySelector('.loading-message');

  // var progressLoading = function () {
  //   if (progressPercent >= 100) {
  //     clearInterval(progressBar);
  //   } else {
  //     progressPercent++;
  //     $progressLoading.style.width = progressPercent + '%';
  //   }
  // };

  // var hideLoading = function () {
  //   // console.log('hide');
  //   progressPercent = 100;
  //   $progressLoading.style.width = progressPercent + '%';
  //   clearInterval(progressBar);
  //   $loadingWrap.classList.remove('loading');
  //   document.body.classList.remove('on-popup');
  // };

  // var showLoading = function (loadingText) {
  //   //animation progress loading bar
  //   document.body.classList.add('on-popup');
  //   progressPercent = 0;
  //   $progressLoading.style.width = progressPercent + '%'; // $messageLoading.innerHTML(loadingText);

  //   $loadingWrap.classList.add('loading'); // clearInterval(progressBar);

  //   setTimeout(function () {
  //     progressBar = setInterval(progressLoading, 10);
  //   }, 300);
  // };

  // showLoading(); //document ready

  // document.addEventListener('DOMContentLoaded', function () {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

  if (scrollPosition > 0) {
    document.body.classList.add('scrolling')
  } else {
    document.body.classList.remove('scrolling')
  }

  document.querySelectorAll('[data-carousel="swiper"]').forEach(function (obj, index) {
    var container = obj.getAttribute('id'),
      slideItem =
        !obj.getAttribute('slide-item') || isNaN(obj.getAttribute('slide-item'))
          ? 3
          : Number(obj.getAttribute('slide-item')),
      slideSpeed =
        !obj.getAttribute('slide-speed') || isNaN(obj.getAttribute('slide-speed'))
          ? 400
          : Number(obj.getAttribute('slide-speed')),
      slideLoop = obj.getAttribute('slide-loop') == true ? 'true' : 'false',
      slideDirection = obj.getAttribute('slide-direction') == 'vertical' ? 'vertical' : 'horizontal',
      slidecenteredSlides = obj.getAttribute('slide-centeredSlides') == true ? 'true' : 'false',
      dataAutoplay =
        !obj.getAttribute('slide-autoplay') || isNaN(obj.getAttribute('slide-autoplay'))
          ? false
          : {
              delay: Number(obj.getAttribute('slide-autoplay')),
              disableOnInteraction: false,
            },
      swOption

    if (!container) {
      obj.setAttribute('id', 'swiper-slider-' + index)
      container = 'swiper-slider-' + index
    }

    swOption = {
      // Optional parameters
      direction: slideDirection,
      loop: slideLoop,
      speed: slideSpeed,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: slidecenteredSlides,
      // If we need pagination
      pagination: {
        el: '#' + container + ' .swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '#' + container + ' .swiper-button-next',
        prevEl: '#' + container + ' .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: slideItem > 2 ? 2 : 1,
        },
        992: {
          slidesPerView: slideItem,
        },
      }, // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    }

    if (dataAutoplay) {
      swOption.autoplay = dataAutoplay
    }

    var mySwiper = new Swiper('#' + container + ' .swiper-container', swOption)
  })
  var swiper2 = new Swiper('.banner-swiper-carousel .swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }, // speed: 1500,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-carousel .swiper-button-next',
      prevEl: '.swiper-carousel .swiper-button-prev',
    },
    // breakpoints: {
    //     640: {
    //       slidesPerView: 1.5
    //     },
    //     768: {
    //       slidesPerView: 2.5,
    //     },
    // },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
  var swiper3 = new Swiper('.culture-swiper-carousel .swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // Navigation arrows
    navigation: {
      nextEl: '#culture-swiper-carousel .swiper-button-next',
      prevEl: '#culture-swiper-carousel .swiper-button-prev',
    },
    breakpoints: {
      // 640: {
      //   slidesPerView: 1.5
      // },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
    }, // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
  var swiper4 = new Swiper('.why-swiper-carousel .swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    // effect: 'fade',
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    // speed: 1500,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-carousel .swiper-button-next',
    //   prevEl: '.swiper-carousel .swiper-button-prev',
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    }, // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
  var swiper5 = new Swiper('.why-choose-swiper-carousel .swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '#why-choose-swiper-carousel .swiper-button-next',
      prevEl: '#why-choose-swiper-carousel .swiper-button-prev',
    },
    pagination: {
      el: '#why-choose-swiper-carousel .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
    },
  })
  AOS.init()
  var myCollapsible = document.getElementById('main-nav')
  myCollapsible.addEventListener('shown.bs.collapse', function () {
    document.body.classList.add('on-popup')
  })
  myCollapsible.addEventListener('hide.bs.collapse', function () {
    document.body.classList.remove('on-popup')
  })
  // }); //reset offsetHeight and scrollspy height

  var windowResize = function () {}

  window.addEventListener('resize', windowResize)
  window.addEventListener('scroll', function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

    if (scrollPosition > 0) {
      document.body.classList.add('scrolling')
    } else {
      document.body.classList.remove('scrolling')
    }
  })
  // window.addEventListener('load', (event) => {
  //   setTimeout(function () {
  //     hideLoading() // $('#loading').removeClass('loading');
  //   }, 500) // var elem = document.querySelector('.masonry-grid');
  //   // var iso = new Isotope( elem, {
  //   //     // options
  //   //     itemSelector: '.masonry-grid-item'
  //   // });

  //   document.querySelectorAll('.lazyload').forEach(function (obj, index) {
  //     obj.classList.add('loaded')
  //   })
  // })
}
