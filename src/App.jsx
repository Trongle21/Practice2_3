import "./App.css";
import Slide from "./components/Slide";
import "bootstrap/dist/css/bootstrap.min.css";
import slides from "./data.json";
import PracticeAccordion from "./components/PracticeAccordion";

function App() {
  return (
    <div style={{width: 900}} className="container">
      <Slide slides={slides.project1} />
      <PracticeAccordion slides={slides.project2} />
    </div>
  );
}

export default App;
