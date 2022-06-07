import "./layout.css";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <div className="nav-container">
        <Link to="/" className="home">
          Տնային Էջ
        </Link>
        <Link to="/GameCardes" className="GameCarde">
          Խաղաքարտեր
        </Link>
        <Link to="/MemoryGame" className="MemoryGame">
          Հիշողության մարզիչ
        </Link>
        <Link to="/Chingachung" className="Chingachung">
          Չինգաչունգ
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
