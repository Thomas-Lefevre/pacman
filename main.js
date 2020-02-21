document.addEventListener("DOMContentLoaded", function () {
    //Debut de mon code javascript 
    function pacman() {
        var pac = document.getElementById("pacman");
        var posX = pac.offsetLeft;
        var posY = pac.offsetTop;
        var audio= new Audio('0477.wav')
        document.addEventListener("keydown", function (event) {
            console.log(event.keyCode);
            switch (event.keyCode) {
                case 68:
                    if (posX >=900) {
                        audio.play();
                        console.log("out");
                    } else {
                        posX = posX + 50;
                        pac.style.left = posX + "px";
                    }
                    break;
                case 81:
                    if (posX == 0) {
                        console.log("out");
                        audio.play();
                    } else {
                        posX = posX - 50;
                        pac.style.left = posX + "px";
                    }
                    break;
                case 83:
                    if (posY >= 400) {
                        console.log("out");
                        audio.play();
                    } else {
                        posY = posY + 50;
                        pac.style.top = posY + "px";
                    }
                    break
                case 90:
                    if (posY==0 ){
                        console.log("out");
                        audio.play();
                    } else {
                        posY = posY - 50;
                        pac.style.top = posY + "px";
                    }
                    break
                default:
                    break;
            }
        })
    }
    pacman();
    //fin de mon code javascript
});