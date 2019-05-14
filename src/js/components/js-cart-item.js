 export default function() {
    let cICollect = document.querySelectorAll('.js-cart-item');

    if ( !cICollect ) {
      return;
    }

    cICollect.forEach(function(cIItem, index) {
      let cIQuan  = cIItem.querySelector('.js-cart-item__quantity');

      cIItem.addEventListener('click', itemClickHndl);
      cIQuan.addEventListener('input', quanInputHndl);
    });

    function itemClickHndl(evt) {
      let el = this;
      let elClicked = evt.target;
      let elQ = el.querySelector('.js-cart-item__quantity');
      let elMinus = el.querySelector('.js-cart-item__minus');
      let elPlus = el.querySelector('.js-cart-item__plus');
      let elQVal = parseInt(elQ.value);
      let elQValNew = elQVal;

      if ( elClicked == elMinus ) {
        elQValNew = elQVal - 1;
      }

      if ( elClicked == elPlus ) {
        elQValNew = elQVal + 1;
      }

      if ( elQValNew >= 1 && elQValNew <=10 ) {
        elQ.value = elQValNew;
        elPlus.disabled = elQValNew >= 10;
        elMinus.disabled = elQValNew <= 1;
      }
    }

    function quanInputHndl(evt) {
      let el = this;
      let cIQuan = el.closest('.js-cart-item');
      let elMinus = cIQuan.querySelector('.js-cart-item__minus');
      let elPlus = cIQuan.querySelector('.js-cart-item__plus');
      let elQVal = parseInt(el.value);

      if ( elQVal > 10 ) {
        el.value = 10;
      }

      if ( elQVal < 1 ) {
        el.value = 1;
      }

      elPlus.disabled  = elQVal >= 10;
      elMinus.disabled = elQVal <= 1;
    }
 }
