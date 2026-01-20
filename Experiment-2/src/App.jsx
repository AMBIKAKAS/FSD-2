import React from "react";
import SinglePageApp from './component/Spa';
import MainPage from './component/mainpage';
import "./App.css"

  // const [count, setCount] = useState(0)

function App() {
  return (
    <>
      <MainPage />
      <SinglePageApp />
    </>
  );
}

export default App;