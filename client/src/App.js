import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getDog from "../src/actions/index";
import "./App.css";
import Footer from "./componet/footer";
import Home from "./componet/Home";
import LandingPage from "./componet/LandingPage";

// const dispatch = useDispatch;
function App() {
  //   useEffect(() => {
  //     dispatch(getDog());
  //   }, []);

  return (
    <div className="App">
      <div>
        <Footer />
      </div>

      <LandingPage />
      <Home />
    </div>
  );
}

export default App;
