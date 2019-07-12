export default function() {
  let hIMgs = document.querySelectorAll(".js-img-loading");

  if ( !hIMgs.length ) {
    return;
  }

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
        let hLoadParent = img.closest('.is-loading');

        hLoadParent.classList.remove('is-loading');
      })
      .catch((img) =>  {
        let hLoadParent = img.closest('.is-loading');

        hLoadParent.classList.remove('is-loading');
        hLoadParent.classList.add('is-error');
      })
  });
}
