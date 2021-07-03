const modal = document.querySelector(".modal");
const preview = document.querySelectorAll(".galeriaDeImagenes img");
const fullImg = document.querySelector(".fullImg");

preview.forEach((preview)=>{
    preview.addEventListener("click", ()=>{
        modal.classList.add("open");

        
        const sourceImg = preview.getAttribute("data-full");
        fullImg.src = `./imagenes/${sourceImg}`;
    })
})

modal.addEventListener("click", (e)=>{
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
    }
})