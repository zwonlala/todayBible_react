import "./App.css";
import Phrase from "./Phrase.js";

function App() {
  const ex = [
    [1, "aaa"],
    [2, "bbb"],
    [3, "ccc"],
  ];
  return (
    <div className="App">
      {ex.map((row, index) => (
        <Phrase number={row[0]} contents={row[1]} key={index} />
      ))}
    </div>
  );
}

export default App;
