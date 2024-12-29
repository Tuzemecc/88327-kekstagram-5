import {picturesSetup} from './view.js';
import {generateData} from './data.js';

const data = generateData();
console.log(data)
picturesSetup(data);
