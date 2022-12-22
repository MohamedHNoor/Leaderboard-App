import { input, score, gameID } from './variables.js';

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

export default postScore;
