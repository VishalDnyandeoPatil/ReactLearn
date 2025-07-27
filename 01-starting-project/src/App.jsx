import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import  Header  from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic]= useState('components')
  
  function handelSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    console.log("App component executing")

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
            <TabButton  onSelect={()=>handelSelect('components')}>Components</TabButton>
            <TabButton  onSelect={()=>handelSelect('jsx')}>Jsx</TabButton>
            <TabButton  onSelect={()=>handelSelect('props')}>Props</TabButton>
            <TabButton  onSelect={()=>handelSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
