import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo, changeTodo}) => { 
    return(
        <div className="rounded-t-md dark:bg-gray-800 bg-white  [&>article]:p-4 mt-6 transition-all duration-1000 overflow-hidden">
          {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo}/>
          ))}
        </div> 
    ); 
};
export default TodoList; 