(function () {
  'use strict'; //reset offsetHeight and scrollspy height

  var windowResize = function () {};

  window.addEventListener('resize', windowResize);
  window.addEventListener('scroll', function () {// var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // if (scrollPosition > 0) {
    //     document.body.classList.add("scrolling");
    // } else {
    //     document.body.classList.remove("scrolling");
    // }
  });

  function getHashFilter() {
    var hash = location.hash; // get filter=filterName

    var matches = location.hash.match(/filter=([^&]+)/i);
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent(hashFilter);
  }

  window.addEventListener('load', event => {
    var elemGridId = 'masonry-grid',
        elemGridSelector = '.masonry-grid-item',
        $elemGrid = document.getElementById(elemGridId),
        $filters = document.getElementById('masonry-filter');

    if ($elemGrid) {
      if ($filters) {
        // bind filter button click
        $filters.querySelectorAll('.masonry-filter-item').forEach(elm => {
          elm.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var filterAttr = e.currentTarget.getAttribute('data-filter'); // set filter in hash

            location.hash = 'filter=' + encodeURIComponent(filterAttr);
          });
        });
      }

      var hashFilter = getHashFilter() || '*'; // if ( !hashFilter ) {
      //     location.hash = 'filter=' + encodeURIComponent( '*' );
      // }

      var iso = new Isotope($elemGrid, {
        // options
        itemSelector: '#' + elemGridId + ' ' + elemGridSelector,
        filter: hashFilter
      });
      var isIsotopeInit = false;

      function onHashchange() {
        var hashFilter = getHashFilter();

        if (!hashFilter && isIsotopeInit) {
          return;
        }

        isIsotopeInit = true; // filter isotope
        // var iso = new Isotope( $elemGrid, {
        //     // options
        //     itemSelector: '#' + elemGridId + ' ' + elemGridSelector,
        //     filter: hashFilter
        // });

        iso.arrange({
          filter: hashFilter
        }); // set selected class on button

        if (hashFilter && $filters) {
          $filters.querySelectorAll('.masonry-filter-item.active').forEach(elm => {
            elm.classList.remove('active');
          });
          $filters.querySelector('[data-filter="' + hashFilter + '"]').classList.add('active');
        }
      }

      window.addEventListener('hashchange', function (event) {
        onHashchange();
      }); // trigger event handler to init Isotope

      onHashchange();
    }
  }); //document ready

  document.addEventListener('DOMContentLoaded', function () {});
})();
//# sourceMappingURL=isotop-filter.js.map
