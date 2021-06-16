const tiles = document.querySelectorAll(".box");

tiles.forEach((box) => {
    box.addEventListener("click",(e) => {
        if (box.getAttribute("up") == "red") {
           box.setAttribute("up", "white");
        }
        else if (box.getAttribute("up") == "white") {
            box.setAttribute("up", "red");
        }
    })
})
