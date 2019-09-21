import React from "react";


function TeamMember (props){

    const TeamMemberList = [];

    for (let member of props.TeamMemberList){

        TeamMemberList.push(<div>
            <p>{member.name}</p>
        </div>)
    }

    return (
        <div>{TeamMemberList}</div>
    )

}

export default TeamMember;