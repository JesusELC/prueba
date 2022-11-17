import CheckIcon from "./icons/IconCheck";
import CrossIcon from "./icons/IconCross";

const TodoItem = ({todo, deleteTodo, changeTodo}) => { 
    const {id,title,completed} = todo;
    return(
       <article className="flex gap-4 border-b-gray-300 border-b dark:bg-gray-800 ">
       
       <button 
           onClick={() => changeTodo(id)}
           className={`rounded-full border-2 w-5 h-5 ${completed? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ": "inline-block" }`}>
          {
            completed && <CheckIcon />
          }
        </button>

        <p className={`dark:text-gray-300 text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
        <button 
          className="flex-none"
          onClick={() => deleteTodo(id)}
        >
          <CrossIcon />
        </button>
      </article>
    )
 }
 export default TodoItem;