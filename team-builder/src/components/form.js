
import React, {useState} from "react";

const initialMemberForm = {
    name: ' ',
    age: ' ',
    role: ' '
};

function Form (props){
    const [memberForm, setMemberForm] = useState(initialMemberForm);

    const onNameChange = e =>{
        setMemberForm({
            ...memberForm,
            name: e.target.value
        })
    }

    const onAgeChange = e =>{
        setMemberForm({
            ...memberForm,
            age: e.target.value
        })
    }

    const onRoleChange = e =>{
        setMemberForm({
            ...memberForm,
            role: e.target.value
        })
    }
    
    return(
        <form>
            <label htmlFor = "nameInput">Name</label>
            <input value = {memberForm.name} onChange ={onNameChange}/>
            <label htmlFor = "ageInput">Name</label>
            <input value = {memberForm.age} onChange ={onAgeChange}/>
            <label htmlFor = "roleInput">Name</label>
            <input value = {memberForm.role} onChange ={onRoleChange}/>
        </form>
    )
}

export default Form;