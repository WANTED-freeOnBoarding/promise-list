import React from "react";
import "./App.css";
import Header from "components/Header";
import ToDoContainer from "components/ToDoContainer";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "auto", width: "100vh" }}>
      <Header />
      <ToDoContainer />
    </div>
  );
};

export default App;
