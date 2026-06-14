import React, { Suspense } from "react";

const About = React.lazy(() => import("./About"));

const LazyLoading = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
