import "./app.css";
import { Users } from "./users";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  console.log(query)

  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}></input>
      <ul className="list">
        {Users.map((user) => ( 
          <li key={user.id} className="listItem">{user.first_name}</li>

        ))}
        
      </ul>
    </div> 
  );
}

export default App;