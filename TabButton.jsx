export default function TabButton({ children, onSelect }) {
    console.log('TAB BUTTON COMPONENT EXECUTING');
    return (
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    );
  }