var ans;
var score = 0;
function on1() {
  document.getElementById("overlay1").style.display = "block";
  document.getElementById("cat1que1").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
  document.getElementById("cat2que1").style.display = "none";
}
function on3() {
  document.getElementById("overlay3").style.display = "block";
  document.getElementById("cat3que1").style.display = "none";
}
function on4() {
  document.getElementById("overlay4").style.display = "block";
  document.getElementById("cat4que1").style.display = "none";
}
function on5() {
  document.getElementById("overlay5").style.display = "block";
  document.getElementById("cat1que2").style.display = "none";
}
function on6() {
  document.getElementById("overlay6").style.display = "block";
  document.getElementById("cat2que2").style.display = "none";
}
function on7() {
  document.getElementById("overlay7").style.display = "block";
  document.getElementById("cat3que2").style.display = "none";
}
function on8() {
  document.getElementById("overlay8").style.display = "block";
  document.getElementById("cat4que2").style.display = "none";
}
function on9() {
  document.getElementById("overlay9").style.display = "block";
  document.getElementById("cat1que3").style.display = "none";
}
function on10() {
  document.getElementById("overlay10").style.display = "block";
  document.getElementById("cat2que3").style.display = "none";
}
function on11() {
  document.getElementById("overlay11").style.display = "block";
  document.getElementById("cat3que3").style.display = "none";
}
function on12() {
  document.getElementById("overlay12").style.display = "block";
  document.getElementById("cat4que3").style.display = "none";
}
function on13() {
  document.getElementById("overlay13").style.display = "block";
  document.getElementById("cat1que4").style.display = "none";
}
function on14() {
  document.getElementById("overlay14").style.display = "block";
  document.getElementById("cat2que4").style.display = "none";
}
function on15() {
  document.getElementById("overlay15").style.display = "block";
  document.getElementById("cat3que4").style.display = "none";
}
function on16() {
  document.getElementById("overlay16").style.display = "block";
  document.getElementById("cat4que4").style.display = "none";
}
function checkAnswer1(){
    var ans = document.getElementById("numberAns1").value;
    if (ans.toUpperCase() == "FRIENDS"){
        document.getElementById("numberAns1").style.backgroundColor = "palegreen"
        document.getElementById("next1").style.display = "block";
        document.getElementById("submit1").style.display = "none";
        score = score + 200;
        document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
    } else {
        document.getElementById("numberAns1").style.backgroundColor = "#F5A9A9"
        document.getElementById("next1").style.display = "block";
        document.getElementById("submit1").style.display = "none";
        score = score - 200;
        document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
    }
}
function checkAnswer2(){
  var ans = document.getElementById("numberAns2").value;
  if (ans.toUpperCase() == "PRISONER"){
    document.getElementById("numberAns2").style.backgroundColor = "palegreen"
    document.getElementById("next2").style.display = "block";
    document.getElementById("submit2").style.display = "none";
    score = score + 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns2").style.backgroundColor = "#F5A9A9"
    document.getElementById("next2").style.display = "block";
    document.getElementById("submit2").style.display = "none";
    score = score - 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer3(){
  var ans = document.getElementById("numberAns3").value;
  if (ans.toUpperCase() == "LOVE STORY"){
    document.getElementById("numberAns3").style.backgroundColor = "palegreen"
    document.getElementById("next3").style.display = "block";
    document.getElementById("submit3").style.display = "none";
    score = score + 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns3").style.backgroundColor = "#F5A9A9"
    document.getElementById("next3").style.display = "block";
    document.getElementById("submit3").style.display = "none";
    score = score - 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer4(){
  var ans = document.getElementById("numberAns4").value;
  if (ans.toUpperCase() == "LEONARDO DICAPRIO"){
    document.getElementById("numberAns4").style.backgroundColor = "palegreen"
    document.getElementById("next4").style.display = "block";
    document.getElementById("submit4").style.display = "none";
    score = score + 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns4").style.backgroundColor = "#F5A9A9"
    document.getElementById("next4").style.display = "block";
    document.getElementById("submit4").style.display = "none";
    score = score - 200;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer5(){
  var ans = document.getElementById("numberAns5").value;
  if (ans.toUpperCase() == "THE BIG BANG THEORY" || ans.toUpperCase() == "BIG BANG THEORY"){
    document.getElementById("numberAns5").style.backgroundColor = "palegreen"
    document.getElementById("next5").style.display = "block";
    document.getElementById("submit5").style.display = "none";
    score = score + 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns5").style.backgroundColor = "#F5A9A9"
    document.getElementById("next5").style.display = "block";
    document.getElementById("submit5").style.display = "none";
    score = score - 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer6(){
  var ans = document.getElementById("numberAns6").value;
  if (ans.toUpperCase() == "PECULIAR"){
    document.getElementById("numberAns6").style.backgroundColor = "palegreen"
    document.getElementById("next6").style.display = "block";
    document.getElementById("submit6").style.display = "none";
    score = score + 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns6").style.backgroundColor = "#F5A9A9"
    document.getElementById("next6").style.display = "block";
    document.getElementById("submit6").style.display = "none";
    score = score - 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer7(){
  var ans = document.getElementById("numberAns7").value;
  if (ans.toUpperCase() == "TITANIUM"){
    document.getElementById("numberAns7").style.backgroundColor = "palegreen"
    document.getElementById("next7").style.display = "block";
    document.getElementById("submit7").style.display = "none";
    score = score + 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns7").style.backgroundColor = "#F5A9A9"
    document.getElementById("next7").style.display = "block";
    document.getElementById("submit7").style.display = "none";
    score = score - 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer8(){
  var ans = document.getElementById("numberAns8").value;
  if (ans.toUpperCase() == "MERYL STREEP"){
    document.getElementById("numberAns8").style.backgroundColor = "palegreen"
    document.getElementById("next8").style.display = "block";
    document.getElementById("submit8").style.display = "none";
    score = score + 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns8").style.backgroundColor = "#F5A9A9"
    document.getElementById("next8").style.display = "block";
    document.getElementById("submit8").style.display = "none";
    score = score - 400;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer9(){
  var ans = document.getElementById("numberAns9").value;
  if (ans.toUpperCase() == "THE FRESH PRINCE OF BEL-AIR" || ans.toUpperCase() == "FRESH PRINCE OF BEL-AIR" || ans.toUpperCase() == "THE FRESH PRINCE OF BEL AIR" || ans.toUpperCase() == "FRESH PRINCE OF BEL AIR"){
    document.getElementById("numberAns9").style.backgroundColor = "palegreen"
    document.getElementById("next9").style.display = "block";
    document.getElementById("submit9").style.display = "none";
    score = score + 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns9").style.backgroundColor = "#F5A9A9"
    document.getElementById("next9").style.display = "block";
    document.getElementById("submit9").style.display = "none";
    score = score - 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer10(){
  var ans = document.getElementById("numberAns10").value;
  if (ans.toUpperCase() == "FAULT"){
    document.getElementById("numberAns10").style.backgroundColor = "palegreen"
    document.getElementById("next10").style.display = "block";
    document.getElementById("submit10").style.display = "none";
    score = score + 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns10").style.backgroundColor = "#F5A9A9"
    document.getElementById("next10").style.display = "block";
    document.getElementById("submit10").style.display = "none";
    score = score - 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer11(){
  var ans = document.getElementById("numberAns11").value;
  if (ans.toUpperCase() == "TAKE A CHANCE ON ME"){
    document.getElementById("numberAns11").style.backgroundColor = "palegreen"
    document.getElementById("next11").style.display = "block";
    document.getElementById("submit11").style.display = "none";
    score = score + 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns11").style.backgroundColor = "#F5A9A9"
    document.getElementById("next11").style.display = "block";
    document.getElementById("submit11").style.display = "none";
    score = score - 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer12(){
  var ans = document.getElementById("numberAns12").value;
  if (ans.toUpperCase() == "JENNIFER ANISTON"){
    document.getElementById("numberAns12").style.backgroundColor = "palegreen"
    document.getElementById("next12").style.display = "block";
    document.getElementById("submit12").style.display = "none";
    score = score + 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns12").style.backgroundColor = "#F5A9A9"
    document.getElementById("next12").style.display = "block";
    document.getElementById("submit12").style.display = "none";
    score = score - 600;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer13(){
  var ans = document.getElementById("numberAns13").value;
  if (ans.toUpperCase() == "GIRL MEETS WORLD"){
    document.getElementById("numberAns13").style.backgroundColor = "palegreen"
    document.getElementById("next13").style.display = "block";
    document.getElementById("submit13").style.display = "none";
    score = score + 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns13").style.backgroundColor = "#F5A9A9"
    document.getElementById("next13").style.display = "block";
    document.getElementById("submit13").style.display = "none";
    score = score - 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer14(){
  var ans = document.getElementById("numberAns14").value;
  if (ans.toUpperCase() == "FIRES"){
    document.getElementById("numberAns14").style.backgroundColor = "palegreen"
    document.getElementById("next14").style.display = "block";
    document.getElementById("submit14").style.display = "none";
    score = score + 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns14").style.backgroundColor = "#F5A9A9"
    document.getElementById("next14").style.display = "block";
    document.getElementById("submit14").style.display = "none";
    score = score - 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer15(){
  var ans = document.getElementById("numberAns15").value;
  if (ans.toUpperCase() == "DYNAMITE"){
    document.getElementById("numberAns15").style.backgroundColor = "palegreen"
    document.getElementById("next15").style.display = "block";
    document.getElementById("submit15").style.display = "none";
    score = score + 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns15").style.backgroundColor = "#F5A9A9"
    document.getElementById("next15").style.display = "block";
    document.getElementById("submit15").style.display = "none";
    score = score - 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function checkAnswer16(){
  var ans = document.getElementById("numberAns16").value;
  if (ans.toUpperCase() == "JOAQUIN PHOENIX"){
    document.getElementById("numberAns16").style.backgroundColor = "palegreen"
    document.getElementById("next16").style.display = "block";
    document.getElementById("submit16").style.display = "none";
    score = score + 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  } else {
    document.getElementById("numberAns16").style.backgroundColor = "#F5A9A9"
    document.getElementById("next16").style.display = "block";
    document.getElementById("submit16").style.display = "none";
    score = score - 800;
    document.getElementById("right").innerHTML =  "Score: <span>$" + score + "</span>";
  }
}
function erase1() {
  document.getElementById("overlay1").style.display = "none";
}
function erase2() {
  document.getElementById("overlay2").style.display = "none";
}
function erase3() {
  document.getElementById("overlay3").style.display = "none";
}
function erase4() {
  document.getElementById("overlay4").style.display = "none";
}
function erase5() {
  document.getElementById("overlay5").style.display = "none";
}
function erase6() {
  document.getElementById("overlay6").style.display = "none";
}
function erase7() {
  document.getElementById("overlay7").style.display = "none";
}
function erase8() {
  document.getElementById("overlay8").style.display = "none";
}
function erase9() {
  document.getElementById("overlay9").style.display = "none";
}
function erase10() {
  document.getElementById("overlay10").style.display = "none";
}
function erase11() {
  document.getElementById("overlay11").style.display = "none";
}
function erase12() {
  document.getElementById("overlay12").style.display = "none";
}
function erase13() {
  document.getElementById("overlay13").style.display = "none";
}
function erase14() {
  document.getElementById("overlay14").style.display = "none";
}
function erase15() {
  document.getElementById("overlay15").style.display = "none";
}
function erase16() {
  document.getElementById("overlay16").style.display = "none";
}
function finishButton(){
  document.getElementById("end").style.display = "block";
  document.getElementById("total").innerHTML =  "YOU WIN: $ "+score;
}
