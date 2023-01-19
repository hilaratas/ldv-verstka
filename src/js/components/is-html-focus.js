export default function() {
  let $html = $('html');

  $html.on('focusin', function(){
    $html.toggleClass('is-html-focus');
  });

  $html.on('focusout', function() {
    $html.toggleClass('is-html-focus');
  });

  $html.on('mousedown touchstart', function() {
    $html.removeClass('is-html-focus');
  });
}
