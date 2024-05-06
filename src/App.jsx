import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy level" targetTime={1}/>
        <TimerChallenge title="Medium level" targetTime={3}/>
        <TimerChallenge title="Hard level" targetTime={5}/>
        <TimerChallenge title="Impossible level" targetTime={10}/>

      </div>
    </>
  );
}

export default App;
