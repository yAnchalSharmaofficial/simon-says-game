let gameseq=[];
let userseq=[];
let head=document.querySelector("h2");
let heighest=document.querySelector("h3");


let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
let topScore=0;

// if(topScore=>level){
//     topScore=level;
//     heighest.innerText=`Heighest Score:${topScore}`;
//     alert("Congrats! You have reached the Heighest Score");
// }else{
//     heighest.innerText=`Heighest Score:${topScore}`;
// }

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
    levelup();
    }
    
})

function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")},
        250);    
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")},
        250);    
}

function levelup(){
    userseq=[];
    level++;
    head.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);

    if(topScore=>level){
        topScore=level;
        heighest.innerText=`Heighest Score:${topScore}`;
        // alert("Congrats! You have reached the Heighest Score");
    }else{
        heighest.innerText=`Heighest Score:${topScore}`;
    }
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);

        };
    }
    else{
        head.innerHTML=`Game Over!! Your score was <b>${level}</b> <br>Press any key to START again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },150);
        reset();

    }
}

function btnPress(){
    let btn=this;
    userflash(this);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (let btns of allBtns){
    btns.addEventListener("click", btnPress);
}


function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}