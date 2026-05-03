
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Search from "./Components/Search"
import SingleMovie from "./Components/SingleMovie"
import Error from "./Components/Error"

function App() {
  

  return (
    <>
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="Search" element={<Search/>}/>
     <Route path="movie/:id" element={<SingleMovie/>}/>
     <Route path="*" element={<Error/>}/>

     </Routes>
     
    </>
  )
}

export default App
