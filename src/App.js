import "./App.css";
import Headers from "./Mycomponents/Headers";
import { Footer } from "./Mycomponents/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { About } from "./About";
import Home from "./Mycomponents/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers title="MY TODOS LIST" searchbar={true} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
