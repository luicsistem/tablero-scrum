
const API_URL = ("https://my-json-server.typicode.com/luicsistem/tablero-scrum/tasks")



axios.get(API_URL)
.then(resp => fillTasks(resp.data))
.catch(err => console.log(err))

function fillTasks(data) {
    data.map(d => {
        let newTask = document.createElement("article");
        let tasktitle = document.createElement("h3");
        tasktitle.innerText = d.title

        newTask.appendChild(tasktitle)

        let column = document.getElementById("doneTasks")
        column.appendChild(newTask)
    })
}