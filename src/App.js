import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
// import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Expertise />
      {/* <Contact /> */}
      

      <SocialLinks />
    </div>
      );
}

export default App;
