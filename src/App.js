import React, { useState } from "react";
import Signin from "./components/Signin/Signin";
import StudentHome from "./components/StudentHome/StudentHome";

const App = () => {
  const [route, setRoute] = useState("Signin");
  const [user, setUser] = useState({});

  const updateUser = (user) => {
    setUser({ ...user });
  };

  const handleRoute = (route) => setRoute(route);
  return (
    <div className="App">
      {route === "Signin" ? (
        <Signin setUser={updateUser} changeRoute={handleRoute} />
      ) : (
        <StudentHome user={user} changeRoute={handleRoute} />
      )}
    </div>
  );
};

export default App;
