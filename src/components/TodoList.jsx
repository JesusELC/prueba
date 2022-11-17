import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo, changeTodo}) => { 
    return(
        <div className="dark:bg-gray-800 bg-white rounded-t-md [&>article]:p-4 mt-6">
          {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo}/>
          ))}
        </div> 
    ); 
};
export default TodoList; 