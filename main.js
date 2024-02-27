 /*TEAM A CHANGE*/
 

 function changeTeamName(){
  let h1Element = document.getElementById("new_Namea");

  let newName = prompt("A takımının ismini giriniz");
  
  h1Element.textContent = newName;

}
 
function increaseTeamA(){
  let aTeamAscore = document.getElementById("team_Ateam");
  aTeamAscore.innerHTML = Number(aTeamAscore.innerHTML)+1;
}


function increaseTeamAdown(){
  let aTeamScoreDown= document.getElementById("team_Ateam");
  aTeamScoreDown.innerHTML = Number(aTeamScoreDown.innerHTML)-1;
}

function aTeamClearButton(){
  let  aTeamScoreClear = document.getElementById("team_Ateam");
  aTeamScoreClear.innerHTML = 0;
}

let spanId = document.getElementById("team_Ateam");
let upBtn = document.getElementById("team_Aup");
let downBtn = document.getElementById("team_Adown");
let clearButtonA = document.getElementById("clear_ButtonA");
console.log(spanId.innerHTML);

function zeroControl(){
  if(spanId.innerHTML=="0"){console.log("ife girdi"); 
    downBtn.disabled = true;
  }else if(spanId.innerHTML !="0"){ console.log("else if e girdi");
    downBtn.disabled = false;
  }
}

upBtn.addEventListener("click",function(){
  zeroControl();
});

downBtn.addEventListener("click",function(){
  zeroControl();
});

clearButtonA.addEventListener("click", function(){
  zeroControl();
});

zeroControl();


   /*TEAM B CHANGE*/

function teamBteamName(){
  
  let h2Element=document.getElementById("new_Nameb");

  let newNames = prompt(" B takımının ismini giriniz");

  h2Element.textContent=newNames;

}


function increaseTeamB(){
  let bTeamAscore = document.getElementById("team_Bteam");
  bTeamAscore.innerHTML = Number(bTeamAscore.innerHTML)+1;
}

function increaseTeamBdown() {
  let bTeamScoreDown = document.getElementById("team_Bteam");

  bTeamScoreDown.innerHTML = Number(bTeamScoreDown.innerHTML)-1;
}


function bTeamClearButton(){
  let clearBbutton = document.getElementById("team_Bteam");
  clearBbutton.innerHTML = 0;
}


let spanIdB = document.getElementById("team_Bteam");
let upBtnB = document.getElementById("up_BtnB");
let downBtnB = document.getElementById("down_btnB");
let celerButtonB = document.getElementById("clear_ButtonB");

function zeroControlB() {
  if(spanIdB.innerHTML=="0"){
    downBtnB.disabled = true;
  } else if(spanIdB.innerHTML !="0"){
    downBtnB.disabled = false;
  }
}

upBtnB.addEventListener("click",function(){
  zeroControlB();
});

downBtnB.addEventListener("click",function(){
  zeroControlB();
});

celerButtonB.addEventListener("click", function(){
  zeroControlB();
});

zeroControlB();