import { connect } from "react-redux";
import {deleteTodo} from "../../actions";

const List = (props) => {
  return (
    <div className="block">
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo.message} <button className="btn1" onClick={()=> props.dispatch(deleteTodo(todo.id))}>⌦</button></li>
        
      ))}
     
    </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data
});

export default connect(mapStateToProps)(List);