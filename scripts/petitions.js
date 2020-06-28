
const API_URL = ("https://my-json-server.typicode.com/luicsistem/tablero-scrum/tasks")



axios.get(API_URL)
.then(resp => fillTasks(resp.data))
.catch(err => console.log(err))

function fillTasks(data) {
    data.map(d => {
        let newTask = document.createElement("article");
        let tasktitle = document.createElement("h3");
        tasktitle.innerText = d.title

        let taskPerson = document.createElement("p")
        taskPerson.innerHTML = `<span> Responsable: </span> ${d.person}`

        let taskDeadline = document.createElement("p")
        taskDeadline.innerHTML = `<span>Plazo: </span> ${d.deadline}`

        newTask.classList.add("postit")

        newTask.appendChild(tasktitle)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)

        let columnTodo = document.getElementById("todoTasks")
        let columnInprogress = document.getElementById("inprogressTasks")
        let columnDone = document.getElementById("doneTasks")


        if(d.state === "to-do") {
            columnTodo.appendChild(newTask)
        }
        if(d.state === "in-progress") {
            columnInprogress.appendChild(newTask)
        }
        if(d.state === "done") {
            columnDone.appendChild(newTask)
        }
        
        
    })
}