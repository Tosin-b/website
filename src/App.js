import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import `se`
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar/>

    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
