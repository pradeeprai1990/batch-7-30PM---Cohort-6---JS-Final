const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


let header=document.querySelector("header")
window.addEventListener(
    "scroll",
    ()=>{
        if(window.scrollY>100){
            header.classList.add("headerSticky")
        }
        else{
              header.classList.remove("headerSticky")
        }
        
    }
)