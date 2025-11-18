import { useCallback, useEffect, useRef, useState } from 'react';

export const WorkoutTimerSection = () => {
  const [countTimer, setCountTimer] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const ref = useRef(null);

  const startTimer = () => {
    if (!isTimerStart) {
      setIsTimerStart(true);
      ref.current = setInterval(() => {
        setCountTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsTimerStart(false);
    clearInterval(ref.current);
  };

  const formatTime = (seconds) => {
    const sec = seconds % 60;
    const minute = Math.floor(seconds / 60);
    const hr = Math.floor(minute / 60);
    return (
      <div>
        <span>{hr.toString().padStart(2, '0')}</span>:
        <span>{minute.toString().padStart(2, '0')}</span>:
        <span>{sec.toString().padStart(2, '0')}</span>
      </div>
    );
  };
  return (
    <div>
      <div className="w-[300ox] h-[300px] border flex flex-col justify-center items-center">
        <div>{countTimer}</div>
        <div>{formatTime(countTimer)}</div>
        <div className="flex gap-2 mt-2">
          <button onClick={startTimer} className="btn-blue">
            Start
          </button>
          <button onClick={pauseTimer} className="btn-blue">
            Pause
          </button>
          <button className="btn-blue">Reset</button>
        </div>
      </div>
    </div>
  );
};
