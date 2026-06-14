import { useRef, useLayoutEffect } from "react";

function App() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log(divRef.current.offsetWidth);
  }, []);

  return <div ref={divRef}>Hello</div>;
}

export default App;
