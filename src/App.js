import "./App.css";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
function App() {
  return (
    
  <div>
    
    <div className="flex">
      <NavBar />
      
      <div className="ml-16 p-4 bg-slate-700 ">
        <Profile/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
    
  </div>
  );
}

export default App;
