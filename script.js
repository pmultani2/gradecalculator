document.getElementById("colorbutton").onclick = darkMode;
document.getElementById("calculatebutton").onclick = calculate;
document.getElementById("addrowbutton").onclick = addRow;
document.getElementById("clearbutton").onclick = deleteRow;

function calculate() {
  var grades = document.getElementsByClassName("gradeinput");
  var weights = document.getElementsByClassName("weightinput");
  var gradeSum = 0;
  var weightSum = 0;
  var grade = 0;
  for (var i = 0; i < grades.length; i ++) {
    gradeSum = gradeSum + (grades[i].value*weights[i].value);
    weightSum = +weightSum + +weights[i].value;
    grade = (gradeSum/weightSum).toFixed(2);
  }
  if (grade != "NaN") {
    document.getElementById("gradetext").innerHTML = "Grade: " + grade + "%";
  }
}

function addRow() {
  var row = document.createElement("div");
  row.className = "rowcontainer";
  var gradeinput = document.createElement("input");
  var weightinput = document.createElement("input");
  gradeinput.type = "number";
  weightinput.type = "number";
  gradeinput.className = "gradeinput";
  weightinput.className = "weightinput";
  row.appendChild(gradeinput);
  row.appendChild(weightinput);
  document.getElementById("tablecontainer").appendChild(row);
}

function deleteRow() {
  console.log(console.log(document.getElementById("tablecontainer").childNodes.length));
  if (document.getElementById("tablecontainer").childNodes.length > 5) {
    document.getElementById("tablecontainer").removeChild(document.getElementById("tablecontainer").lastChild);
  }
}

function darkMode() {
  if (document.getElementById("colorbutton").innerHTML == "Dark Mode") {
    document.body.style = "background-color: black; color: white;";
    document.getElementById("headercontainer").style = "color: white;";
    document.getElementById("colorbutton").style = "background-color: white; color: black;";
    document.getElementById("calculatebutton").style = "background-color: white; color: black;";
    document.getElementById("addrowbutton").style = "background-color: white; color: black;";
    document.getElementById("clearbutton").style = "background-color: white; color: black;";
    document.getElementById("colorbutton").innerHTML = "Light Mode";
    document.getElementById("finalbutton").style = "background-color: white; color: black;";
  } else {
    document.body.style = "background-color: white; color: black;";
    document.getElementById("headercontainer").style = "color: black;";
    document.getElementById("colorbutton").style = "background-color: black; color: white;";
    document.getElementById("calculatebutton").style = "background-color: black; color: white;";
    document.getElementById("addrowbutton").style = "background-color: black; color: white;";
    document.getElementById("clearbutton").style = "background-color: black; color: white;";
    document.getElementById("colorbutton").innerHTML = "Dark Mode";
    document.getElementById("finalbutton").style = "background-color: black; color: white;";
  }
}