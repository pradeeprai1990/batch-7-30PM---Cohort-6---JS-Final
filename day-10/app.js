

let downloadBrBTN=document.querySelector(".downloadBr")


// downloadBrBTN.addEventListener(
//     "click",
//     function(){
//         alert()
//     }
// )

let brochureModalElement=document.querySelector(".brochureModal")

downloadBrBTN.addEventListener(
    "click",
    ()=>{
        brochureModalElement.classList.add("showModal")
    }
)


let closeBtn=document.querySelector(".brochureModal h3 span")
//<h3>Download Course Brochure <span>&times;</span> </h3>
closeBtn.addEventListener(
    "click",
    ()=>{
          brochureModalElement.classList.remove("showModal")
    }
)

// let showModal=()=>{
//     alert()
// }

// downloadBrBTN.addEventListener("click",showModal)

//   <button class="downloadBr" onclick="">Download Brochure </button>




let offeringMidElement=document.querySelector(".offeringMid")

let galleryOverlayElement=document.querySelector(".galleryOverlay")

let galleryModalIMG=document.querySelector(".galleryModal img")
//<img src="" alt="">






offeringMidElement.addEventListener(
    "click",
    ( event )=>{ 
        //event - >Object 
        let currentSrc=event.target.src // path | undefined
       
        if(currentSrc){
          
            galleryOverlayElement.classList.add('galleryModalShow')
            galleryModalIMG.src=currentSrc    
        }
       
        
    }
)

let closeGalleryModal=()=>{
           galleryOverlayElement.classList.remove('galleryModalShow')
           galleryModalIMG.src=''
}

let galleryModalSpan=document.querySelector(".galleryModal span")

galleryOverlayElement.addEventListener(
    "click",
    closeGalleryModal
)
galleryModalSpan.addEventListener(
    "click",
    closeGalleryModal
)

let galleryModalMid=document.querySelector(".galleryModal")

galleryModalMid.addEventListener(
    "click",
    (e)=>{
       e.stopPropagation() //Parent Event Cancel
    }
)