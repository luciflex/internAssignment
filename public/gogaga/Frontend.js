const tbody=document.querySelector(".tbody");
const signupForm=document.querySelector(".signupForm");


async function signupHelper(name,age,interest,bio){
    const response=await axios.post("/gogaga/adder",{name,age,interest,bio});
    console.log(response.data);
    if(response.data.err){
        alert(`User already exists`);
    }
    else if(response.data.Status=="new user added") {
        alert("New user added");
    }
}
if(signupForm){
    signupForm.addEventListener("submit",function(e){
      e.preventDefault();
      const name=document.getElementById("name").value;
      const age=document.getElementById("age").value;
      const interest=document.getElementById("interests").value;
      const bio=document.getElementById("bio").value;
      
      signupHelper(name,age,interest,bio);
    })
}

async function listHelper(){
    try{
    let users=await axios.get("/gogaga/user",{})
    users=users.data.users;
    console.log(users);

        for(let i=0;i<users.length;i++){
            var tr=document.createElement("tr");
            tr.innerHTML=`<td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].interest}</td>`
            tbody.appendChild(tr);
        }
    }catch(err){
        console.log(err.message);
    }
}

if(tbody){
    listHelper();
}