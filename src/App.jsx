import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import News from "./pages/News"
import './index.css'
import { useState } from "react"
import LoadingBar from "react-top-loading-bar"
 
function App() {
const apiKey = import.meta.env.VITE_API_KEY_SECRET
const pageSize = 12
const country = 'in'
const [progress, setProgress] = useState(1)
  return (
    <BrowserRouter>
    <Navbar/>
    <LoadingBar   height={4}
        color='#f41946'
        progress={progress} />
    <Routes>
    <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general'/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country={country} category='general'/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category='entertainment'/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category='business'/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='health'/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category='science'/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='sports'/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='technology'/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
