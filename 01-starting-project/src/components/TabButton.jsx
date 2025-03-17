export default function TabButton({ children, onSelect, isSelected}) {
  console.log("Tab button component executed")

    return (
    <li>
      <button className= {isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
    </li>
  );
}
