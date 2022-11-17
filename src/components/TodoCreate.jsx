import { useState } from "react";

const TodoCreate = ({createTodo}) =>{

    const [title,setTitle] = useState("")

    const handleSubmitAddTodo = (e) =>{
        e.preventDefault();
        if(!title.trim()){
            return setTitle("");
        }
        createTodo(title);
        setTitle(""); 
    }

    return(
        <form onSubmit={handleSubmitAddTodo} className="p-4 dark:bg-gray-800 bg-white border-black rounded-md overflow-hidden flex gap-3 items-center mt-6">
         <span className="rounded-full border-2 w-5 h-5 inline-block"> </span>
         <input 
            className="w-full dark:bg-gray-800 text-gray-400 outline-none dark:text-gray-300" 
            type="text" 
            placeholder="Crear nueva tarea..." 
            value={title}    
            onChange={(e)=> setTitle(e.target.value)}
        />
        </form>
    );
};
export default TodoCreate;