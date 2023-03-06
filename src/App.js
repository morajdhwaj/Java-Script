import "./App.css";

function App() {
  const Shoot = () => {
    alert("Good Short");
  };

  return (
    <div className="App">
      <button onClick={Shoot}>Shoot</button>
    </div>
  );
}

export default App;
