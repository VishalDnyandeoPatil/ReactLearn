import "./TabButton.css";

export default function TabButton({ children }) {

    function handelClick() {
        console.log("Hello world!")
    }

    return (
    <li>
      <button onClick={handelClick}>{children}</button>
    </li>
  );
}
