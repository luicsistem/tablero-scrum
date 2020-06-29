const form = document.getElementById("formTask")



form.addEventListener("submit", ev => {
  ev.preventDefault()
  const formData = ev.target

  const days = formData.titleTask.value

  const data = {
    title: formData.titleTask.value,
    person: formData.personTask.value,
    deadline: Number(moment().add(7, "days").format('X')),
    created: Number(moment().add(Number(days), "days").format("X")),
    state: "to-do"
  }
  function createTasks (data ){
    let newTask = document.createElement("article");
    newTask.classList.add("task")


    let tasktitle = document.createElement("h5");
    tasktitle.innerText = data.title
    newTask.appendChild(tasktitle)
   



    let taskPerson = document.createElement("p")
    taskPerson.innerHTML = `<span> Responsable: </span> ${data.person}`
    newTask.appendChild(taskPerson)
    

    let taskDeadline = document.createElement("p")
    taskDeadline.innerHTML = `<span>Plazo: </span> ${unixToDate(data.deadline)}`
    newTask.appendChild(taskDeadline)

    let columnTodo = document.getElementById("todoTasks")
    columnTodo.appendChild(newTask)
    newTask.classList.add("postit")

  }
 
  axios.post(API_URL, data)
  .then(resp => {
    createTasks(resp.data)
    formData.reset()
  })
  .catch(e => console.log(e))
})

