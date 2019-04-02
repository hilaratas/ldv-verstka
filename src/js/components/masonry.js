export default function() {
  let msnrs = document.querySelectorAll('.js-masonry');

  if ( !msnrs.length )
      return;

  msnrs.forEach(function(msnr) {
    new Masonry(msnr);
  });

}
