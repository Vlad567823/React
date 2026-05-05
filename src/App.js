import React from "react";
import Greeting from "./Greeting";
import Message from "./Message";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Кнопка натиснута!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Це довільне повідомлення." />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;