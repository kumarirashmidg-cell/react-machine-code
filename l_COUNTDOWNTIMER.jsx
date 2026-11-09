import React, { useRef, useState } from "react";

const CountDownTimer = ({ counter = 10 }) => {
  const [count, setCount] = useState(counter);
  let timer = useRef(null);

  //NOTE - if i use let timer = null, so every re-render timer become null ,
  // and in startCountdown function it create issue - like multiple interval is created

  function startCountdown() {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCount((curr) => {
        if (curr === 0) {
          clearInterval(timer.current);
          timer.current = null;
          return 0;
        } else {
          return curr - 1;
        }
      });
    }, 1000);
  }

  function pauseCountdown() {
    clearInterval(timer.current);
    timer.current = null;
  }

  function resetCountdown() {
    clearInterval(timer.current);
    timer.current = null;
    setCount(counter);
  }

  return (
    <div>
      <h1>count down timer</h1>
      <span>{count}</span>{" "}
      <button onClick={startCountdown}>start</button>
      <button onClick={pauseCountdown}>pause</button>
      <button onClick={resetCountdown}>reset</button>
    </div>
  );
};

export default CountDownTimer;


import React, { useEffect, useState } from "react";

const CountDownTimer = ({ counter = 10 }) => {
  let [count, setCount] = useState(counter);
  let [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setCount((curr) => {
          if (curr === 0) {
            clearInterval(interval);
            return 0;
          } else {
            return curr - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <h1>CountDownTimer</h1>
      <span>{String(count).padStart("2", 0)}</span>{" "}
      <button onClick={() => setStart(true)}>start countdown</button>
    </div>
  );
};

export default CountDownTimer;