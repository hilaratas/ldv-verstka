export default function() {
  let hHeader = document.getElementById('js-main-header');
  let hHHolder = document.getElementById('js-main-header-holder');

  if ( !hHeader || !hHHolder ) {
    return;
  }

  hHHolder.appendChild(hHeader);
  hHeader.classList.remove('is-hidden');
}
