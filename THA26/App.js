import "./styles.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
export default function App() {
  const user = useSelector(selectUser);

  return <div className="App">{user ? <Logout /> : <Login />}</div>;
};