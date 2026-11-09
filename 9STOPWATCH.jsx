import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    let timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes === 60) {
          hours++;
          minutes = 0;
        }
        return { hours, minutes, seconds };
      });
    }, 100);
    return () => clearInterval(timer);
  }, [isRunning]);

  function reset() {
    setIsRunning(false);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }

  return (
    <div>
      <h5>StopWatch</h5>
      <div>
        <span>{String(time.hours).padStart("2", 0)}</span>:
        <span>{String(time.minutes).padStart("2", 0)}</span>:
        <span>{String(time.seconds).padStart("2", 0)}</span>
      </div>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
