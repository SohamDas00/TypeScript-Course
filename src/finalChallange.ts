type User={
    id:number,
    name:string,
    email:string,
    role: "user" | "admin",
}

const user:User={
    id: 1,
    name: "Soham",
    email: "soham@gmail.com",
    role: "admin"
}

// step 3 generic

//print user

function printUser(user:User){
    const {name,role}=user;
    if(role ==='admin'){
        console.log("admin");
    }
    return(
        <div>
            {name} - {role}
        </div>
    )
}


/*typeof role === "string"/"number"...
        ↓
"What TYPE is role?"

role === "admin"
        ↓
"What VALUE does role contain?" */