export default function() {
  let hIMgs = document.querySelectorAll(".pict__img");

  hIMgs.forEach(function(elem) {
    let hImg = elem;
    let promise = new Promise(function(resolve, reject) {
      hImg.addEventListener('load', function() {
        resolve(hImg);
      });
      hImg.addEventListener('error', function() {
        reject(hImg);
      });
    });

    promise
      .then((img) => {
        let $img = $(img);
        let $loadParent = $img.closest('is-loading');

        $loadParent.removeClass('is-loading');
      })
      .catch((img) =>  {
        let $img = $(img);
        let $loadParent = $img.closest('is-loading');

        $loadParent.removeClass('is-loading');
        $loadParent.addClass('is-error');
      })
  });
}
