import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const[isLoading,setIsLoading]=useState(true)
const [movies, setMovies]=useState([])
const [iserror, setError]=useState({show: false,msg: ""})
const [query,setQuery] = useState("titanic")

  
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response=="True"){
        setIsLoading(false)
        setMovies(data.Search)
         setError({ show: false, msg: "" })
      }else{
        setIsLoading(false)
        setError({
          show: true,
          msg: data.Error
        })
     
      }
      
    } catch (error) {
      console.log(error);
      
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const timerout=setTimeout(()=>{
       getData(`${API_URL}&s=${query}`);
    },800)
    return ()=>clearTimeout(timerout)
  }, [query]);
  return <AppContext.Provider value={{movies,iserror,query,setQuery,isLoading,setIsLoading}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
