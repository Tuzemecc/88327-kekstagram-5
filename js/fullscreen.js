
export function showFullScreenImage(evt){

  const picSrc = this.querySelector('img').getAttribute('src');
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', picSrc);
  bigPicture.classList.remove('hidden');

}
