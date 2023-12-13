// JavaScript source code
const dbParam = JSON.stringify({ table: "user", limit: 10 });
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    let text = "<table border='4'>"
    for (let x in myObj) {
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "demo.json");
xmlhttp.setRequestHeader("Content-type", "demo.json");
xmlhttp.send("x=" + dbParam);
