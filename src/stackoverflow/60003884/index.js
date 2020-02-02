import $ from 'jquery';

function main() {
  $('.all-products-tab-buttons .row').scroll((event) => {
    let $width = $('.all-products-tab-buttons .row').outerWidth();
    let $scrollWidth = $('.all-products-tab-buttons .row')[0].scrollWidth;
    let $scrollLeft = $('.all-products-tab-buttons .row').scrollLeft();
    if ($scrollWidth - $width === $scrollLeft) {
      $('.all-products-tab-buttons').addClass('remove');
    } else {
      $('.all-products-tab-buttons').removeClass('remove');
    }
  });
}

export default main;
