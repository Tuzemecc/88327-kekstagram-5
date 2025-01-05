import {config} from './config.js';
import {getRndInteger} from './tools.js';

let photoId = 1;
let commentId = 1;

export const data = generateData();

function generateData(){

  const res = [];
  for(let i = 1; i <= 25; i++){
    const item = generatePhotoData();
    item.comments = [];
    const commentsCount = getRndInteger(0, 15);
    for(let j = 0; j <= commentsCount; j++){
      item.comments.push(generateCommentData());
    }
    res.push(item);
  }

  return res;

}

function generatePhotoData(){

  const res = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: `Фотография #${photoId}`,
    likes: getRndInteger(15, 200)
  };

  photoId++;

  return res;
}

function generateCommentData(){

  const res = {
    id: commentId,
    avatar: `img/avatar-${getRndInteger(1, 6)}.svg`,
    name: getName(),
    message: getMessage()
  };
  commentId++;
  return res;

}

function getMessage(){
  const res = [];

  const messageCount = getRndInteger(0, 1);
  for(let i = 0; i <= messageCount; i++){
    res.push(config.mock.messages[getRndInteger(0, config.mock.messages.length)]);
  }
  return res.join('\n');
}

function getName(){
  return config.mock.names[getRndInteger(0, config.mock.names.length)];
}
