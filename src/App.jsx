import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";


const initialStateTodos =JSON.parse(localStorage.getItem(`todos`)) || [ 
  { id: 1, title: "Go to the gym", completed:true },
  { id: 2, title: "Read 30 min", completed:false },
  { id: 3, title: "Sleep ", completed:false },
  { id: 4, title: "Pick glorseries", completed:false },
  { id: 5, title: "Complete todo app", completed:false }
];

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
  }

  const [filter,setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch (filter){
      case "all":
        return todos; 
      case "completed":
        return todos.filter((todo)=>!todo.completed);
      case "active":
        return todos.filter((todo)=> todo.completed);
      default:
        return todos;
    }
  } 

   return (
    <div className="bg-gray-300 dark:bg-gray-900 bg-contain bg-no-repeat min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-1000 ">
      
      <Header/>

      <main className="container mx-auto px-4 mt-6 md:max-w-xl">
        <TodoCreate createTodo ={createTodo}/>

        <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} changeTodo={changeTodo}/>

        <TodoComputed computedTodoLeft={computedTodoLeft} clearCompleted={clearCompleted}/>
        
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>  

      <footer className="text-center mt-8 dark:text-gray-300">
        drag and drop
      </footer>

    </div>
    )
};

export default App;
