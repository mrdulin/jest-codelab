import $ from 'jquery';

function factBox() {
  console.log('GHEje fwe');
  $('body').css('background-color', 'red');
}

function sum(a, b) {
  console.log('SUMMM');
  return a + b;
}

export { factBox, sum };
