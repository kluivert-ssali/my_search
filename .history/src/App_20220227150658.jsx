import "./app.css";
import { users } from "./users";

function App() {
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search"></input>
      <ul className="list">
        {users.map((users) => (
          <li className="listItem">{users.firstName}</li>
        ))}
        
      </ul>
    </div> 
  );
}

export default App;