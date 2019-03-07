'use strict';

function SideNav(el) {
  var sideNavEl = el;
  //var closeEl = el.querySelector('.side-nav__close');
  var openEl = document.getElementById('js-main-menu-toggle');
  var pageContEl = document.querySelector('.page__content');
  var htmlEl = document.documentElement;
  var sideContEl = document.querySelector('.main-menu__content');

  var startPosition = 0,
        currentPosition = 0,
        isGestureStarted = false;

  var self = this;

  openEl.addEventListener('click', onToggleMenu);

  sideNavEl.addEventListener('click', onsideContElClick);
  sideContEl.addEventListener('pointerdown', onPointerDown);
  sideContEl.addEventListener('pointermove', onPointerMove);
  sideContEl.addEventListener('pointerup', onPointerUp);
  sideContEl.addEventListener('pointercancel', onPointerUp);
  sideContEl.addEventListener('pointerleave', onPointerUp);

  function onsideContElClick(e) {
    // Close only on non content click
    if (e.target === sideNavEl) {
        hide();
    }
  }

  function onToggleMenu(evt) {
    toggle();
  }

  function onPointerDown(evt) {
    startPosition = currentPosition = evt.pageX;
    isGestureStarted = true;
    //sideContEl.setPointerCapture(evt.pointerID);
    disableTransition();
  }

  function onPointerMove(evt) {
    if (!isGestureStarted) {
      return;
    }

    currentPosition = evt.pageX;
    updatePosition();
  }

  function onPointerUp(evt) {
    if (evt.target === sideContEl) {
      currentPosition = evt.pageX;
    }

    isGestureStarted = false;
    //sideContEl.releasePointerCapture(evt.pointerID);

    enableTransition();
    resetPosition();

    if ( currentPosition - startPosition < -50) {
      hide();
    } else {
      show();
    }
  }

  function resetPosition() {
        requestAnimationFrame(function() {
          sideContEl.style.transform = '';
        });
    }

  function disableTransition() {
        sideContEl.style.transition = 'none';
    }

    function enableTransition() {
        sideContEl.style.transition = '';
    }

    function updatePosition() {
      requestAnimationFrame(function(){
        var diff = Math.min(0, currentPosition - startPosition);
        sideContEl.style.transform = 'translateX(' + diff + 'px)';
      });
    }

    function show() {
      htmlEl.classList.add('is-main-menu-open');
    }

    function hide() {
      htmlEl.classList.remove('is-main-menu-open');
    }

    function toggle() {
        htmlEl.classList.toggle('is-main-menu-open');
    }
}
