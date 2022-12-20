// eslint-disable-next-line no-unused-vars
import { style } from './style.css';

const scoreLists = document.getElementById('score-lists');

const lists = [
  {
    name: 'Mohamed',
    score: 100,
  },
  {
    name: 'Ahmed',
    score: 10,
  },
  {
    name: 'Ajaba',
    score: 200,
  },
  {
    name: 'Abdi',
    score: 90,
  },
  {
    name: 'Nima',
    score: 1000,
  },
];

const displayList = () => {
  lists.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('score-list');
    div.innerHTML = `<p>${item.name}: ${item.score}</p>`;
    scoreLists.appendChild(div);
  });
};

displayList();
