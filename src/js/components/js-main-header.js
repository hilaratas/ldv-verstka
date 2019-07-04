export default function() {
  let hHeader = document.getElementById('js-main-header');
  let hHHolder = document.getElementById('js-main-header-holder');

  console.log(hHeader);
  console.log(hHHolder);

  if ( !hHeader || !hHHolder ) {
    return;
  }

  hHHolder.appendChild(hHeader);
  hHeader.classList.remove('is-hidden');
}
