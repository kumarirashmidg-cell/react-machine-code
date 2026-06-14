import React, { useEffect } from "react";

const WidthTracker = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("resize");
    };

    window.addEventListener("resize", handleResize);

    // cleanup hata do
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div>WidthTracker</div>;
};

export default WidthTracker;
