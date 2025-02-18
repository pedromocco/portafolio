import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="grid justify-center max-w-2xl mx-auto">
      <Profile />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
