import { gameID } from './variables.js';

const fetchScore = async () => {
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`
  );

  const lists = await data.json();
  return lists;
};

export default fetchScore;
