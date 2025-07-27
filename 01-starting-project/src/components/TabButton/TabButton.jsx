import "./TabButton.css";

export default function TabButton({ children, onSelect }) {
  
  console.log("Tab button component executing")

    return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
