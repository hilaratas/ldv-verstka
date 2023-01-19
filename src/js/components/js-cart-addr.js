export default function() {
  let pars = document.querySelectorAll(".js-cart-addr");
  let addAddr = document.querySelector(".js-cart-addr__add-addr");

  if ( !pars ) {
    return;
  }

  pars.forEach(function(par) {
    let chList = par.querySelectorAll(".js-cart-addr__toggle");
    console.dir(chList);

    chList.forEach(function(ch) {
      ch.addEventListener("change", onChangeHndl);
      console.dir(addAddr);
    })
  });

  function onChangeHndl(evt) {
      let elem = evt.target;
      let isShow = elem.classList.contains('is-for-show');
      let addAddrEls = addAddr.querySelectorAll('input, select, button');

      if ( isShow ) {
        addAddr.classList.remove('is-hidden');
        addAddr.classList.add('is-shown');
        toggleAllControls(addAddrEls, 'anable');
      } else {
        addAddr.classList.add('is-hidden');
        addAddr.classList.remove('is-shown');
        toggleAllControls(addAddrEls, 'disable');
      }
    }


  function toggleAllControls(controls, newState) {
    if ( !controls ) {
      return;
    }

    controls.forEach(function(control){
      if ( newState === 'disable') {
        control.setAttribute('disabled', 'disabled');
      } else {
        control.removeAttribute('disabled');
      }
    });
  }
}
