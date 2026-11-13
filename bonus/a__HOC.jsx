import React from "react";

const Dashboard = ({ name, email }) => {
  return (
    <div>
      <p>Dashboard</p>
      <span>
        Name:{name} || Email:{email}
      </span>
    </div>
  );
};

const hocProtected = (WrappedComponent) => {
  return function EnhenceDashboard({ isLogedIn, ...props }) {
    if (!isLogedIn) {
      return <h2>Please First Login !!</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

let ProtectedComp = hocProtected(Dashboard);

const App = () => {
  return (
    <div>
      <p>HOC</p>
      <ProtectedComp isLogedIn={false} name="divya" email="divya@gmail.com" />
    </div>
  );
};

export default App;
