import React, {useState} from 'react';
import './App.css';
import uuid from "uuid";

cont initialMembers = [
  {id: uuid(), name: "Amira", Age: "2", Role: "Frontend"},
  {id: uuid(), name: "Amira", Age: "2", Role: "Frontend"},
  {id: uuid(), name: "Amira", Age: "2", Role: "Frontend"}
]

const [members, setMembers] = useState(initialMembers);

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
