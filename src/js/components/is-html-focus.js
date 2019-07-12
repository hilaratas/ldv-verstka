export default function() {
  let $html = $('html');
  let i = 0;
  let n = 0;

  $html.on('focusin', function(t){
    let e = t.originalEvent;
    $html.toggleClass('is-html-focus');
  });

  $html.on('focusout', function(t) {
    $html.toggleClass('is-html-focus');
  });

  $html.on('mousedown touchstart', function(t) {
    $html.removeClass('is-html-focus');
  });
}
