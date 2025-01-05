import {data} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const docBody = document.querySelector('body');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCommentTemplate = bigPictureComments.firstElementChild.cloneNode(true);

export function showFullScreenImage(){
  const id = parseInt(this.getAttribute('id'), 10);
  const picItem = data.filter((item) => item.id === id)?.[0];
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', picItem.url);
  bigPicture.querySelector('.big-picture .social__likes').textContent = picItem.likes;
  bigPicture.querySelector('.big-picture .comments-count').textContent = picItem.comments.length;
  bigPicture.querySelector('.big-picture .social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.big-picture .comments-loader').classList.add('hidden');
  bigPicture.querySelector('.big-picture .social__caption').textContent = picItem.description;
  docBody.classList.add('modal-open');

  bigPicture.querySelector('.big-picture .big-picture__cancel').addEventListener('click', closeFullScreenImage, {once: true});
  document.addEventListener('keydown', closeFullScreenImage, {once: true});

  bigPicture.classList.remove('hidden');

  clearComments();
  showComments(picItem.comments);
}

function closeFullScreenImage(){
  bigPicture.classList.add('hidden');
  docBody.classList.remove('modal-open');
}

function showComments(comments){
  comments.forEach((comment) => {
    const commentItem = bigPictureCommentTemplate.cloneNode(true);
    commentItem.querySelector('.social__picture').setAttribute('src', comment.avatar);
    commentItem.querySelector('.social__picture').setAttribute('alt', comment.name);
    commentItem.querySelector('.social__text').textContent = comment.message;
    bigPictureComments.appendChild(commentItem);
  });
}


function clearComments(){
  bigPictureComments.querySelectorAll('*').forEach((n) => {
    n.remove();
  });
}
