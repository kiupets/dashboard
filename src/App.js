import "./App.css";
import { Bottom } from "./pages/bottom/Bottom";
import { Top } from "./pages/top/Top";

function App() {
  return (
    <div className="App">
      <Top />
      <div className="line"> </div>
      <Bottom />
    </div>
  );
}

export default App;
