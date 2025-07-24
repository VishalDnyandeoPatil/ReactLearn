import { CORE_CONCEPTS } from "./data";
import  Header  from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  function handelSelect() {
        console.log("Hello world!")
    }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton  onSelect={handelSelect}>Components</TabButton>
            <TabButton  onSelect={handelSelect}>Jsx</TabButton>
            <TabButton  onSelect={handelSelect}>Props</TabButton>
            <TabButton  onSelect={handelSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
