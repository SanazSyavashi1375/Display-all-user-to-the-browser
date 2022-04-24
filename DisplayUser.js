import React from "react";

function DisplayUser() {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];
    return ( <
            >
            <
            ul > {
                users.map(user => < li key = { user.id } > { user.name } < /li>)} <
                    /ul> <
                    />
                )
            }
            export default DisplayUser;