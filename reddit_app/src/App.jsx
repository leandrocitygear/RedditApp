
import NavBar from "./components/navBar/NavBar";
import Content from "./components/content/Content";
import './App.css';
import { Routes, Route } from "react-router";
import HomePage from "./components/homePage/HomePage";
import PopularPage from "./components/popularPage/PopularPage";
import ExplorePage from "./components/explorePage/ExplorePage";
import AllPage from "./components/allPage/AllPage";

function App() {
  

  return (
    <body>
    <NavBar />
    <Content/>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="popular" element={<PopularPage />} />
      <Route path="explore" element={<ExplorePage />} />
      <Route path="all" element={<AllPage />} />
    </Routes>
    </body>
    
  )
}

export default App
