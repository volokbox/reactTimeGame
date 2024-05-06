import { useState, useRef } from 'react';

export default function TimerChallenge({title, targetTime}){
    const [ timerStarted, setTimerStarted ] = useState(false);
    const [ timerExpired, setTimerExpired ] = useState(false);

    const timer = useRef();

    function handleClick(){
      timer.current = setTimeout(() => {setTimerExpired(true)}, targetTime * 1000);
      setTimerStarted(true);
    }  

    function handleStop(){
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p>{timerExpired && 'You lost... '}</p>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleClick}>{timerStarted ? 'Stop ' : 'Start '} Timer</button>
            </p>
            <p>
                {timerStarted ? 'Timer running... ' : 'Timer stopped... '}
            </p>
        </section>
    );
}