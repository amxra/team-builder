
import React from "react";


function TeamMember (props){

    const {name, email, role, id, setTeamMember} = props

    return (

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
        <button onClick = {
            e => setTeamMember (e, name, email, role, id)
        }>Edit</button>
    )

}

export default TeamMember;