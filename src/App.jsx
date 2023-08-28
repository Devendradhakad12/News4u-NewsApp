import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import News from "./pages/News"
import './index.css'
 
function App() {
const apikey = import.meta.env.VITE_API_KEY_SECRET
console.log(apikey)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<News/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
