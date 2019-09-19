
import React, {useState} from "react";

const initialMemberForm = {
    name: ' ',
    email: ' ',
    role: ' '
};

const [memberForm, setMemberForm] = useState(initialMemberForm);

function Form (props){
    

    const onNameChange = e =>{
        setMemberForm({
            ...memberForm,
            name: e.target.value
        })
    }

    const onEmailChange = e =>{
        setMemberForm({
            ...memberForm,
            email: e.target.value
        })
    }

    const onRoleChange = e =>{
        setMemberForm({
            ...memberForm,
            role: e.target.value
        })
    }

    const onSubmit = e => {
        
        e.preventDefault();
        props.add(memberForm);
    }
    
    return(
        <form onSubmit = {onSubmit}>
            <label htmlFor = "nameInput">Name</label>
            <input value = {memberForm.name} onChange ={onNameChange}/>
            <label htmlFor = "emailInput">Name</label>
            <input value = {memberForm.email} onChange ={onEmailChange}/>
            <label htmlFor = "roleInput">Emai</label>
            <input value = {memberForm.role} onChange ={onRoleChange}/>
            <button onClick = {onSubmit}>Submit</button>
        </form>
    )
}

export default Form;