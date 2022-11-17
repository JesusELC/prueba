const TodoFilter = ({changeFilter, filter}) => { 
    return(
        <section className="container mx-auto mt-6 transition-all duration-1000">
        <div className="mt-6 dark:bg-gray-800 bg-white rounded-md p-4 flex justify-center gap-4 transition-all duration-1000 ">
          <button className={`hover:text-blue-600 ${filter === 'all'?"text-blue-700 ":"dark:text-gray-400 text-gray-600 "}`} onClick={() => changeFilter("all")}>all</button>
          <button className={`hover:text-blue-600 ${filter === 'active'?"text-blue-700":"dark:text-gray-400 text-gray-600"}`} onClick={() => changeFilter("active")}>active</button> 
          <button className={`hover:text-blue-600 ${filter === 'completed'?"text-blue-700":"dark:text-gray-400 text-gray-600"}`} onClick={() => changeFilter("completed")}>completed</button>
        </div>
      </section>
    );
 };
 export default TodoFilter;