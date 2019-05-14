import isMobile from './components/is-mobile';
import sliders from './components/sliders';
import gumburger from './components/gumburger';
import popups from './components/popups';
import validate from './components/validate';
import accordion from './components/accordion';
import tables from './components/tables';
import mainMenu from './components/main-menu';
import tabsComp from './components/tabs';
import tabsSelectComp from './components/tabs-select';

import mask from './components/mask';
import svg4everybody from './components/svg4everybody';
import pageReload from './components/page-reload';
import payTabs from './components/pay-tabs';
//import svgStore from './components/svg-store';
import aos from './components/aos';
import mainHeader from './components/main-header';
import jsCartItem from './components/js-cart-item';
//import masonry from './components/masonry';


$(function(){
	let htmlEl = document.documentElement;
	if (isMobile()) {
		htmlEl.classList.add('is-mobile');
	} else {
		htmlEl.classList.add('is-not-mobile');
	};

	sliders();
  mainHeader();
	gumburger();
	popups();
	validate();
	accordion();
	tables();
	mainMenu();
	tabsComp();
	tabsSelectComp();
	mask();
	svg4everybody();
	pageReload();
	payTabs();
	//svgStore();
  aos();
  jsCartItem();
});


