import "./App.css";
import "./Style.css"
import NavBar from "./NavBar";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
function App() {
  return (
    
  <>
    
    <div className="main-container">
      <NavBar />
      
      <div className="side-container">
        <Profile/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
    
  </>
  );
}

export default App;
