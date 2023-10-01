function TemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme")
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#TemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#TemaSite").innerHTML = `<i class="bi bi-brightness-low"></i>`;
    }

}

const getHours = () =>{
    const clock = document.getElementsByClassName('relogio') [0]
    const date = new Date ()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)
