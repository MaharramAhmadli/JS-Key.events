var ball = document.getElementById("ball");
var x = 160;
var y = 150;


window.onkeydown = function(event){
    switch(event.keyCode){
        case 37:
        x = x - 2;
        ball.style.left = x + "px";
        break;

        case 39:
             x = x + 2;
             ball.style.left = x + "px";
        break;

        case 38:
            y = y - 2;
            ball.style.top = y +"px";
        break;

        case 40:
            y = y + 2
            ball.style.top = y + "px";
            break;
    }
}

