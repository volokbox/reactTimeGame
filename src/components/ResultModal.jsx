import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime}, ref){
    const userLost = remainingTime <= 0;
    const formattedRemainigTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); 

    return(
        <dialog ref={ref} className="result-modal">
            {userLost && <h2>You lost...</h2> }
            {!userLost && <h2>Your score {score}!</h2> }
            <p>Target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>Your remaining time was <strong>{formattedRemainigTime} seconds.</strong></p>
            <form method="close">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;