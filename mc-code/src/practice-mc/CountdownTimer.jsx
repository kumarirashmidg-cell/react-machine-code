// import React, { useRef, useState } from "react";

// const CountDownTimer = ({ initialTime = 10 }) => {
//   const [count, setCount] = useState(initialTime);
//   const timerRef = useRef(null);

//   function startTimer() {
//     if (timerRef.current) return;

//     timerRef.current = setInterval(() => {
//       setCount((prev) => {
//         if (prev === 0) {
//           clearInterval(timerRef.current);
//           timerRef.current = null;
//           alert("Time's Up!");
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   }

//   function pauseTimer() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   }

//   function restartTimer() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//     setCount(initialTime);
//   }

//   return (
//     <div>
//       <p>{count}</p>

//       <button onClick={startTimer}>Start</button>
//       <button onClick={pauseTimer}>Pause</button>
//       <button onClick={restartTimer}>Restart</button>
//     </div>
//   );
// };

// export default CountDownTimer;

import React, { useEffect, useState } from "react";

const CountDownTimer = ({ initialTime = 10 }) => {
  const [count, setCount] = useState(initialTime);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          setStart(false);
          alert("Time Up!");
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [start]);

  function restartTimer() {
    setStart(false);
    setCount(initialTime);
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Pause</button>
      <button onClick={restartTimer}>Restart</button>
    </div>
  );
};

export default CountDownTimer;
