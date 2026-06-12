// import { useRef, useState } from "react";

// function CountDownTimer() {
//   const [count, setCount] = useState(10);
//   let timer = useRef(null);

//   function startCountDown() {
//     if (timer.current) return null;
//     timer.current = setInterval(() => {
//       setCount((prev) => {
//         if (prev === 0) {
//           alert("timer up!");
//           setCount(10);
//           clearInterval(timer.current);
//           timer.current = null;
//         } else {
//           return prev - 1;
//         }
//       });
//     }, 1000);
//   }

//   return (
//     <main>
//       <p>counter down timer</p>
//       <button onClick={startCountDown}>start</button>
//       <span>{count}</span>
//     </main>
//   );
// }

// export default CountDownTimer;

// ----------------------------------------

import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [count, setCount] = useState(10);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;
    let timer = setInterval(() => {
      console.log("running");
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          timer = null;
          setStart(false);
          return 10;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [start]);
  return (
    <div>
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>pause</button>
      <button
        onClick={() => {
          setStart(false);
          setCount(10);
        }}
      >
        reset
      </button>
      <span>{count}</span>
    </div>
  );
};

export default CountDownTimer;
