import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/Components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3> {props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg}
            />
            <CoreConcept
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
              image={propsImg}
            />
            <CoreConcept
              title="Jsx"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered. "
              image={jsxImg}
            />
            <CoreConcept
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
              image={stateImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
