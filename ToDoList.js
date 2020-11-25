// Varables
let myAction = prompt("Please Enter An Action")
let myNewToDo
let myDelete
let myToDoList = []

// Actions
while(myAction.toLowerCase() !== "quit"){
    if (myAction.toLocaleLowerCase() === 'new'){
        myNewToDo = prompt("Please Enter New To Do")
        myToDoList.push(myNewToDo);
    } else if (myAction.toLocaleLowerCase() === "list"){
        console.log("------");
        for (let toDo of myToDoList) console.log(myToDoList.indexOf(toDo) + 1 +".",toDo)
        console.log("------");
    } else if (myAction.toLocaleLowerCase() === "delete"){
        myDelete = prompt("Please Enter The Number of To Do to Delete")
        myToDoList.splice(myDelete-1,1);
    }
    myAction = prompt("Please Enter An Action")
}