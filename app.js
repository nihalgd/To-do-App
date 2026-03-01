// let todo = [];

// let req = prompt("please enter your request")

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list"){
//         console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
// } else if(req == "add"){
//     let task = prompt("Please enter task you want to add");
//     todo.push(task);
//     console.log("task added");
// }
// } 
let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("________________");
        for(let task of todo){
            console.log(task);
        }
        console.log("________________");
    } 
    else if(req == "add"){
        let task = prompt("Please enter task you want to add");
        todo.push(task);
        console.log("task added");
    }

    req = prompt("please enter your request"); // important
}