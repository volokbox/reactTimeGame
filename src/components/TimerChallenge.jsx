import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}){
    const[ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);

    const dialog = useRef();
    const timer = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleStart(){
      setTimeRemaining(targetTime*1000);
      timer.current = setInterval(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
      }, 10);
    }  

    function handleStop(){
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop ' : 'Start '} Timer
                    </button>
                </p>
                <p>
                    {timerIsActive ? 'Timer running... ' : 'Timer stopped... '}
                </p>
            </section>
        </>
    );
}