import {Droppable, Draggable} from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo, changeTodo}) => { 
    return(
        <Droppable droppableId="todos">{
          (dropableProvided) =>(
            <div ref={dropableProvided.innerRef} {...dropableProvided.droppableProps} className="rounded-t-md dark:bg-gray-800 bg-white  [&>article]:p-4 mt-6 transition-all duration-1000 overflow-hidden">
              {todos.map((todo, index)=>(                
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {(draggableProvided)=>(
                    <TodoItem todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo} ref={draggableProvided.innerRef}{...draggableProvided.dragHandleProps}{...draggableProvided.draggableProps} />
                  )}                                               
                </Draggable>

              ))}
              {dropableProvided.placeholder}
            </div> 
          )
        }
          

        </Droppable>
       
    ); 
};
export default TodoList; 