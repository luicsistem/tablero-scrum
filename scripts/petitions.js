
const API_URL = ("https://my-json-server.typicode.com/luicsistem/tablero-scrum")

axios.get(API_URL)
.then(resp => console.log(resp))
.catch(err => console.log(err)
)