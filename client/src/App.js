import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import Pop1 from "./popup/Pop1";

function App() {
  return (
    <div className="App">
      <Pop1></Pop1>
      <Navbar></Navbar>
      <Body></Body>
      <div id="lobby">
        <div className="lobby-login">
          <Routes>
            <Route path="/" element={<LobbyScreen />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;