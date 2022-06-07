import "react-toastify/dist/ReactToastify.css";
import Layout from "./Components/Layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import GameCardes from "./Components/GameCards/GameCards";
import MemoryGame from "./Components/MemoryGame/MemoryGame";
import Chingachung from "./Components/Chingachung/Chingachung";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="GameCardes" element={<GameCardes />}></Route>
          <Route path="MemoryGame" element={<MemoryGame />}></Route>
          <Route path="Chingachung" element={<Chingachung />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
