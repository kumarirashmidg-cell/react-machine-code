import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const timerRef = useRef(null);

  function start() {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        let { hour, minute, second } = prev;
        second++;
        if (second === 60) {
          minute++;
          second = 0;
        }
        if (minute === 60) {
          hour++;
          minute = 0;
        }
        return { hour, minute, second };
      });
    }, 10);
  }

  function pause() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function reset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
    });
  }

  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        <span>{String(time.hour).padStart(2, "0")}:</span>
        <span>{String(time.minute).padStart(2, "0")}:</span>
        <span>{String(time.second).padStart(2, "0")}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default StopWatch;




// import React, { useState, useRef } from "react";

// const StopWatch = () => {
//   const [time, setTime] = useState(0); // time in seconds
//   const intervalRef = useRef(null);

//   // ⏱ Start
//   const start = () => {
//     if (intervalRef.current) return; // prevent multiple intervals

//     intervalRef.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//   };

//   // ⏸ Pause
//   const pause = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   // 🔄 Reset
//   const reset = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setTime(0);
//   };

//   // ⏱ Convert seconds → hh:mm:ss
//   const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   return (
//     <div>
//       <h1>Stop Watch</h1>

//       <div>
//         <span>{hours}:</span>
//         <span>{minutes}:</span>
//         <span>{seconds}</span>
//       </div>

//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default StopWatch;
