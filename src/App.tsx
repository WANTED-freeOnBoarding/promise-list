import React from "react";
import "./App.css";
import Header from "components/Header";
import ToDoContainer from "components/ToDoContainer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ToDoContainer />
    </>
  );
};

export default App;
