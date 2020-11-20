import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Accueil from "./pages/Accueil/Accueil";
import Boutique from "./pages/Boutique/Boutique";
import classes from "./App.css";
function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Navbar />
        {/* <Boutique /> */}

        <Route exact path="/" component={Accueil} />
        <Route exact path="/boutique" component={Boutique} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
