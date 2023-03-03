import "./App.css";

let x = 100;
console.log(x);

const array = [1, 2, 3, 4, 5];

const arr = array.map(myFunction);

function myFunction(a) {
  return a * 3;
}

function App() {
  return <div className="App">{arr}</div>;
}

export default App;
