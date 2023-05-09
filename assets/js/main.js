
var ball = document.querySelector("ball");

window.onkeydown = function ball (){
    var top =document.getElementById("ball");
    var left = top.offsetLeft;
    var up = top.offsetTop;
    var code = event.keyCode;

    //left 
    if(code == 37 && left > 16){
        top.style.left = (left - 5)+ "px";
    }

    //up
    if(code == 38 && up > 16){
        top.style.top = (up - 5)+ "px"
    }

    //right
    if(code == 39 && left< 731){
        top.style.left = (left + 5)+ "px";
    }

    //down
    if(code == 40 && up < 331){
        top.style.top = (up + 5)+ "px";
    }
}
