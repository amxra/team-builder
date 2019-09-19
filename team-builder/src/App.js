import React, {useState} from 'react';
import './App.css';
import uuid from "uuid";
import Form from "./components/form";
import TeamMember from "./components/teamMembers"

const initialMembers = [
  {id: uuid(), name: "Amira", email: "amira@gmail.com", role: "Frontend"},
  {id: uuid(), name: "Amira", email: "amira@gmail.com", role: "Frontend"},
  {id: uuid(), name: "Amira", emai: "amira@gmail.com", role: "Frontend"}
]

const [members, setMembers] = useState(initialMembers);

function App() {

  const newMember = member => {
    let team = [...members];
    team.push(member)
    setMembers(team)
  }  
  return (
    <div className="App">
     <Form add = {newMember}/>
     <TeamMember TeamMemberList = {members}/>
    </div>
  );
}

export default App;
