import "./App.css";
import ClockOne from "./Components/ClockOne";

function App() {
  let onTimesup = () => {
    console.log(`Time's up!`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>--- A COUNTDOWN TIMER WITH REACT ---</p>
        <div>
          <ClockOne onTimesup={onTimesup} duration={6000} />
        </div>
      </header>
    </div>
  );
}

export default App;
