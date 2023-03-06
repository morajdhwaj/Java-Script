import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();

  const events = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={events}></input>
      {name}
    </div>
  );
}

export default App;
