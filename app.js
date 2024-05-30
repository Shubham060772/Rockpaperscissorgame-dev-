let msg = document.querySelector(".msg");
let yourscore= document.querySelector("#you");
let compscore= document.querySelector("#comp");
let msgtxt=document.querySelector(".msgtext");
let displaycompchoice=document.querySelector(".compchoice");

let yourchoice;
let compchoice;

function getRandomArbitrary(min, max) {
    let nm = Math.random() * (max - min) + min;
    return nm-nm%1;
}

const checkwinner=(yourchoice,compchoice)=>{
    if(yourchoice==compchoice){
        return 0;
    }
    else if (yourchoice=="r"){
        if(compchoice=="p"){
            return -1;
        }
        else{
            return 1;
        }
    }
    else if (yourchoice=="p"){
        if(compchoice=="s"){
            return -1;
        }
        else{
            return 1;
        }
    }
    else if (yourchoice=="s"){
        if(compchoice=="r"){
            return -1;
        }
        else{
            return 1;
        }
    }
}

let btn=document.querySelectorAll(".box");
const rbtn=document.querySelector("#r");
const pbtn=document.querySelector("#p");
const sbtn=document.querySelector("#s");

const result=(yourchoice)=>{
    compchoice=btn[getRandomArbitrary(0,3)].id;
    if(checkwinner(yourchoice,compchoice)===-1){
        comp.textContent=parseInt(comp.textContent)+1;
        msgtxt.classList.add("lost");
        msgtxt.classList.remove("draw");
        msgtxt.classList.remove("win");
        msgtxt.innerText="Oops! You LOST";
    }
    else if(checkwinner(yourchoice,compchoice)===1){
        you.textContent=parseInt(you.textContent)+1;
        msgtxt.classList.add("win");
        msgtxt.classList.remove("draw");
        msgtxt.classList.remove("lost");
        msgtxt.innerText="Congratulations! You WON";
    }
    else if(checkwinner(yourchoice,compchoice)===0){
        msgtxt.classList.add("draw");
        msgtxt.classList.remove("lost");
        msgtxt.classList.remove("win");
        msgtxt.innerText="Its a Draw";
    }
    displaycompchoice.innerText="COMPUTER CHOICE is " + compchoice;
    displaycompchoice.style.display="block";
}

rbtn.addEventListener("click",()=>{
    yourchoice="r";
    result(yourchoice);
})
pbtn.addEventListener("click",()=>{
    yourchoice="p";
    result(yourchoice);
})
sbtn.addEventListener("click",()=>{
    yourchoice="s";
    result(yourchoice);
})
// console.log(getRandomArbitrary(1,4)/1);