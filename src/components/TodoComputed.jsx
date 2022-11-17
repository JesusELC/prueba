const TodoComputed = ({computedTodoLeft,clearCompleted}) => { 
    return(
      <section className="p-4 flex justify-between dark:bg-gray-800 bg-white rounded-b-md">
        <span className="text-gray-400 dark:text-gray-300">{computedTodoLeft} items left</span>
        <button className="text-gray-400" onClick={clearCompleted}>Clear Completed </button>
      </section> 
    ); 
};
export default TodoComputed;