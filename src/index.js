import './style.css';

const scoreLists = document.getElementById('score-lists');
const input = document.getElementById('name');
const score = document.getElementById('score');
const refreshBtn = document.querySelector('.score-section-btn');
const submitBtn = document.querySelector('.form-btn');

const gameID = 'YyIU2D42kI1ya6NGoIeJ';

const postScore = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: input.value,
        score: score.value
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
  );
  await response.json();
  input.value = '';
  score.value = '';
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

const fetchScore = async () => {
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`
  );

  const lists = await data.json();
  return lists;
};

const displayList = async () => {
  const data = await fetchScore();
  const lists = data.result;
  lists.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('score-list');
    div.innerHTML = `<p>${item.user}: ${item.score}</p>`;
    scoreLists.appendChild(div);
  });
};

document.addEventListener('DOMContentLoaded', displayList);

const refresh = () => {
  window.location.reload();
};

refreshBtn.addEventListener('click', refresh);
