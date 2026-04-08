let modalElement=document.querySelector(".modal")

setTimeout( 
    ()=>{
        modalElement.classList.add("modalShow")
    },
    2000
 )


 let btn=document.querySelector(".modal button")
 let notification=document.querySelector(".notification")
 btn.addEventListener(
    "click",
    ()=>{
       notification.classList.add("notificationShow")
       setTimeout(()=>{
         notification.classList.remove("notificationShow")
       },2000)
    }
 )
 