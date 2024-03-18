import {PropTypes} from 'prop-types';
import { useState } from 'react';
import { RockPaperScissors } from '../RPS.js';

const GameScreen = ({name}) => {
  const [ game ] = useState(new RockPaperScissors(name));
  const [ selection, setSelection ] = useState(`rock`);
  const [ score, setScore ] = useState({user: 0, cpu: 0});
  const [ history, setHistory ] = useState([]);    

  const updateScoreAndHistory = () => {
    setScore({...game.score});
    setHistory([...game.gameHistoryLog]);
  }
  
  const onGoButtonClick = () => {
    console.log(`Go button was clicked`);
    game.play(selection);
    console.log(game.score);
    updateScoreAndHistory();
  }

  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score"> {name}: {score.user} v CPU: {score.cpu}</p>
        <span>{selection}</span>
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice:</label>
          <select 
            className="custom-select" 
            id="user-selection" 
            name="user-selection" 
            value={selection}
            onChange={(e) =>setSelection(e.target.value)}
          >
            <option id="rock" value="rock">
              Rock
            </option>
            <option id="paper" value="paper">
              Paper
            </option>
            <option id="scissors" value="scissors">
              Scissors
            </option>
          </select>
        </div>
        <button className="btn btn-success" type="button" id="go-button" onClick={onGoButtonClick}>
          Go!
        </button>
      </form>

      <div id="game-history">
        <ul>
          {history.map((round, index) => (
            <li key={index}>{round}</li>
          ))}
        </ul>
      </div>
      <button id="reset-game-button" className="btn btn-secondary">
        Reset
      </button>
    </div>
  );
};
GameScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GameScreen;
