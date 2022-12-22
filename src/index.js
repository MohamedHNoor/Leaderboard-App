import './style.css';

import { scoreLists, refreshBtn, submitBtn } from './modules/variables.js';
import postScore from './modules/postData.js';
import fetchScore from './modules/fetchData.js';

const displayList = async () => {
  const data = await fetchScore();
  const lists = data.result;
  lists.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('score-list');
    li.innerHTML = `<p>${item.user}: ${item.score}</p>`;
    scoreLists.appendChild(li);
  });
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

document.addEventListener('DOMContentLoaded', displayList);

const refresh = () => {
  window.location.reload();
};

refreshBtn.addEventListener('click', refresh);
