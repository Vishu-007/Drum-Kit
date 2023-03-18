
document.addEventListener("keydown",function(event)
{
    var s=event.key;
  if(s=="w"|| s=="W")
{
    w();
     animation("w");

}
else if(s=="a"|| s=="A")
{
    a();
}
else if(event.key=="S"|| event.key=="s")
{
    sa();
}
else if(s=="d" || s=="D")
{
    d();
}
else if(s=="j" || s=="J")
{
    j();
}
else if(s=="k" || s=="K")
{
    k();
}
else if(s=="l" || s=="L")
{
    l();
}

})


function animation(cl)
{
    var aq=document.querySelector("."+cl);
    aq.classList.add("pressed");

}


function w()
{
        var audio1= new Audio("sounds/crash.mp3");
        audio1.play();
        this.style.color="black";
        setTimeout(function()
        {
            this.style.color="pink";
        },500);
}
function a()
{
    var audio2= new Audio("sounds/kick-bass.mp3");
    audio2.play();
    this.style.color="black";
}
function sa()
{
    var audio3= new Audio("sounds/snare.mp3");
    audio3.play();
    this.style.color="black";
}

function d()
{
    var audio4= new Audio("sounds/tom-1.mp3");
    audio4.play();
    this.style.color="black";
}

function j()
{
    var audio5= new Audio("sounds/tom-2.mp3");
    audio5.play();
    this.style.color="black";
}

function k()
{
    var audio6= new Audio("sounds/tom-3.mp3");
    audio6.play();
    this.style.color="black";
}

function l()
{
    var audio7= new Audio("sounds/tom-4.mp3");
    audio7.play();
    this.style.color="black";
}

document.querySelector(".w").addEventListener("mouseover",w);
document.querySelector(".a").addEventListener("mouseover",a);
document.querySelector(".s").addEventListener("mouseover",sa);
document.querySelector(".d").addEventListener("mouseover",d);
document.querySelector(".j").addEventListener("mouseover",j);
document.querySelector(".k").addEventListener("mouseover",k);
document.querySelector(".l").addEventListener("mouseover",l);

// animation(w);