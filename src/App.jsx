import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";


const initialStateTodos =JSON.parse(localStorage.getItem(`todos`)) || [];

const reorder =(list, startIndex,endIndex) => {
  const result =[...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect (()=>{
    localStorage.setItem(`todos`, JSON.stringify(todos));
  },[todos]);

  const createTodo = (title) => {
    const newTodo ={
      id: Date.now(),
      title:title.trim(),
      completed:false,
    };
    setTodos([...todos,newTodo]);
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  }

  const changeTodo =(id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const computedTodoLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = ()=>{
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter,setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch (filter){
      case "all":
        return todos; 
      case "completed":
        return todos.filter((todo)=>todo.completed);
      case "active":
        return todos.filter((todo)=>!todo.completed);
      default:
        return todos;
    }
  };

  const handleDragEnd = (result) => {
    const {destination, source} = result;
    if(!destination) return;
    if(source.index === destination.index && source.droppableId === destination.droppableId) return;
    setTodos((prevTasks) => reorder(prevTasks, source.index, destination.index));
  };

   return (
    <div className="bg-gray-100 dark:bg-gray-900 bg-contain bg-no-repeat min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-1000 ">
      
      <Header/>

      <main className="container mx-auto px-4 mt-6 md:max-w-xl">
        <TodoCreate createTodo ={createTodo}/>

        <DragDropContext onDragEnd={handleDragEnd}>

          <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} changeTodo={changeTodo}/> 
         
        </DragDropContext>
        

        <TodoComputed computedTodoLeft={computedTodoLeft} clearCompleted={clearCompleted}/>
        
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>  

      <footer className="text-center mt-8 dark:text-gray-600 text-gray-600">
        ...Drag and Drop to ordenated...
      </footer>

    </div>
    )
};

export default App;
