import 'nodelist-foreach-polyfill';
import 'promise-polyfill/src/polyfill';
import isMobile from './components/is-mobile';
import sliders from './components/sliders';
import gumburger from './components/gumburger';
import popups from './components/popups';
import validate from './components/validate';
import tables from './components/tables';
import mainMenu from './components/main-menu';
import mask from './components/js-mask';
import svg4everybody from './components/svg4everybody';
//import svgStore from './components/svg-store';
import aos from './components/aos';
import mainHeader from './components/js-main-header';
import jsCartItem from './components/js-cart-item';
import jsCartAddr from './components/js-cart-addr';
import jsImgLoading from './components/js-img-loading';

$(function(){
	let htmlEl = document.documentElement;
	if (isMobile()) {
		htmlEl.classList.add('is-mobile');
	} else {
		htmlEl.classList.add('is-not-mobile');
	}

	sliders();
  mainHeader();
	gumburger();
	popups();
	validate();
	tables();
	mainMenu();
	mask();
	svg4everybody();
	//svgStore();
  aos();
  jsCartItem();
  jsCartAddr();
  jsImgLoading();
});


