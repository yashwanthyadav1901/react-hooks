import "./App.css";
import MyUseEffect from "./hooks/MyUseEffect";
import MyUseMemo from "./hooks/MyUseMemo";
import MyUseState from "./hooks/MyUseState";

function App() {
  return (
    <div className="App">
      {/* <MyUseState /> */}
      {/* <MyUseEffect /> */}
      <MyUseMemo />
    </div>
  );
}

export default App;
