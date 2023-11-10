import 'nodelist-foreach-polyfill'
import 'promise-polyfill/src/polyfill'
import svg4everybody from './components/svg4everybody'
import isMobile from './components/is-mobile'
import sliders from './components/sliders'
import jsHumburger from './components/js-humburger'
//import popups from './components/popups';
import jsFormValidate from './components/js-form-validate'
import tables from './components/tables'
import jsMainMenu from './components/js-main-menu'
import jsMaskTel from './components/js-mask-tel'
//import svgStore from './components/svg-store';
import aos from './components/aos'
import jsMainHeader from './components/js-main-header'
import jsCartItem from './components/js-cart-item'
import jsCartAddr from './components/js-cart-addr'
import jsImgLoading from './components/js-img-loading'
import isHtmlFocus from './components/is-html-focus'

$(function () {
  let htmlEl = document.documentElement
  if (isMobile()) {
    htmlEl.classList.add('is-mobile')
  } else {
    htmlEl.classList.add('is-not-mobile')
  }

  sliders()
  svg4everybody()
  jsMainHeader()
  jsHumburger()
  //popups();
  tables()
  jsMainMenu()
  jsMaskTel()
  jsFormValidate()
  //svgStore();
  aos()
  jsCartItem()
  jsCartAddr()
  jsImgLoading()
  isHtmlFocus()
})
