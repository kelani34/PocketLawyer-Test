import React from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <List items={items} />
    </>
  );
}

export default App;
