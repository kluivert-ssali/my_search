import "./app.css";
import { Users } from "./users";

function App() {
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search"></input>
      <ul className="list">
        {Users.map((user) => (
          <li className="listItem">{user.first_name}</li>,
          <li className="listItem">{user.last_name}</li>

        ))}
        
      </ul>
    </div> 
  );
}

export default App;