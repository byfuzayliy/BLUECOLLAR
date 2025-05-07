import { Fragment } from "react";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
