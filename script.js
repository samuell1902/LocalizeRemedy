let topReturnButton = document.getElementById("topReturn")

window.addEventListener ("scroll", () => {
    if (window.scrollY > 300) {
        topReturnButton.classList.add ("show");   
    } else {
        topReturnButton.classList.remove("show");
    }
})

topReturnButton.addEventListener ("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})