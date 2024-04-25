var changebutton = document.getElementById("changecolor");
document.body.classList.add("dark");
changebutton.addEventListener("click", function(event) {
    var theme = event.target.getAttribute("data-theme");
    if(theme == "light") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    event.target.setAttribute("data-theme", "dark");
    }else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        event.target.setAttribute("data-theme", "light");
    }
});
