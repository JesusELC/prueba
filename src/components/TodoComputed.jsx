const TodoComputed = ({computedTodoLeft,clearCompleted}) => { 
    return(
      <section className={`rounded-b-md p-4 transition-all duration-1000 flex justify-between dark:bg-gray-800 bg-white ${computedTodoLeft===0?"rounded-t-md":""}`}>
        <span className="text-gray-600 dark:text-gray-400"> {computedTodoLeft} items left</span>
        <button className="text-gray-600" onClick={clearCompleted}>Clear Completed </button>
      </section> 
    ); 
};
export default TodoComputed;