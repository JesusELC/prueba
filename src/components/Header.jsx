
import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun";

const initialEstateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    
    const [darkMode,setDarkMode] = useState(initialEstateDarkMode)

    useEffect (()=>{
      if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem(`theme`,`dark`)
      }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem(`theme`,`light`)
      }
    },[darkMode]);

    return(
      <header className="container mx-auto pt-8 px-4 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className= "uppercase dark:text-gray-300 text-white text-3xl font-semibold tracking-[0.4em] transition-all duration-1000">todo</h1>
          <button onClick={()=>setDarkMode(!darkMode)}>
            {darkMode?<IconSun/>:<IconMoon/>}
          </button>
        </div>
      </header>
    );
};

export default Header;