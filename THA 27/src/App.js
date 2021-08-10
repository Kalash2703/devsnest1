import "./styles.css";
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

export default function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodo />
      <List />
    </div>
  );
}
