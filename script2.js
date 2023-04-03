document.getElementById("colorbutton").onclick = darkMode;
document.getElementById("calculatebutton").onclick = calculate;


function calculate() { 
  var currentGrade = document.getElementById("gradeinput").value / 100;
  var targetGrade = document.getElementById("targetinput").value / 100;
  var examWeight = document.getElementById("weightinput").value / 100;
  var gradeNeeded = (((targetGrade - (1 - examWeight)*currentGrade)/examWeight)*100).toFixed(2);
  document.getElementById("gradetext").innerHTML = "Grade needed on final: " + gradeNeeded + "%";
}

function darkMode() {
  if (document.getElementById("colorbutton").innerHTML == "Dark Mode") {
    document.body.style = "background-color: black; color: white;";
    document.getElementById("headercontainer").style = "color: white;";
    document.getElementById("colorbutton").style = "background-color: white; color: black;";
    document.getElementById("colorbutton").innerHTML = "Light Mode";
    document.getElementById("finalbutton").style = "background-color: white; color: black;";
    document.getElementById("calculatebutton").style = "background-color: white; color: black;";
  } else {
    document.body.style = "background-color: white; color: black;";
    document.getElementById("headercontainer").style = "color: black;";
    document.getElementById("colorbutton").style = "background-color: black; color: white;";
    document.getElementById("colorbutton").innerHTML = "Dark Mode";
    document.getElementById("finalbutton").style = "background-color: black; color: white;";
    document.getElementById("calculatebutton").style = "background-color: black; color: white;";
  }
}

