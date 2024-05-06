export default function ResultModal({result, targetTime}){
    return(
        <dialog className="result-modal" open>
            <p>You {result}</p>
            <p>Target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>Your time was <strong>X seconds.</strong></p>
            <form method="close">
                <button>Close</button>
            </form>
        </dialog>
    );
}