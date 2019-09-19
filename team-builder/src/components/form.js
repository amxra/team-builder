
import React, {useState} from "react";

const initialMemberForm = {
    name: ' ',
    age: ' ',
    role: ' '
};

function Form (props){
    const [memberForm, setMemberForm] = useState(initialMemberForm);
    
    return(
        <form>
            <label htmlFor = "nameInput">Name</label>
            <input value = {memberForm.name}/>
            <label htmlFor = "ageInput">Name</label>
            <input value = {memberForm.age}/>
            <label htmlFor = "roleInput">Name</label>
            <input value = {memberForm.role}/>
        </form>
    )
}

export default Form;