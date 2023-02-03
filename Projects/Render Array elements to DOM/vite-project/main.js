import "./style.css"
import data from "./src/db/data"

const app = document.getElementById("app");
const name = document.querySelector(".name")
const title = document.querySelector(".job-title")

let dataElement = data.map(data=>{
    return `<div>
    <div class="name">${data.name}</div>
    <div class="job-title">${data.job_title}</div>
    <hr />
    </div>`
})

app.innerHTML = dataElement;