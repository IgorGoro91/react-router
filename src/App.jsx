import { BrowserRouter, Routes, Route  } from "react-router-dom"

import PostsList from "./pages/postslist"
import AboutUs from "./pages/AboutUs"
import HomePage from "./pages/HomePage"

import DefaultLayout from "./layouts/DefaultLayout"


function App() {


  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/posts-list" Component={PostsList} />
            
          </Route>

       </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
