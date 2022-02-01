import React from "react";
import "./App.css";
import { Provider } from './context/tableContext'
import { PagesContainer } from './pages/PagesContainer'

function App() {

  return (
    <Provider>
      <PagesContainer />
    </Provider>
  );
}

export default App;
