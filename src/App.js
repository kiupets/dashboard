import React,{useState,useEffect} from 'react';
import { api } from "./api/api";
import "./App.css";
import { Bottom } from "./pages/bottom/Bottom";
import { Top } from "./pages/top/Top";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getDataTable().then((res) => setData(res.table));
  }, []);

  return (
      <div className="App">
        <Top  data={data}/>
        <div className="line"> </div>
        <Bottom  data={data}/>
      </div>

  );
}

export default App;
