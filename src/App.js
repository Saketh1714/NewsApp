import React, {useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router,
  Route,Routes
 } from 'react-router-dom'
 import LoadingBar from "react-top-loading-bar";



const App=()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
 
  
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route path="/" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general"/>}/>
        <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="business"/>}/>
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="entertainment"/>}/>
        <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general"/>}/>
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="health"/>}/>
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="science"/>}/>
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="sports"/>}/>
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="technology"/>}/>

        </Routes>

        </Router>
        
         
      </div>
    )
  
}
export default App


//750df5f5cd7a4d49aad878b299db59e8