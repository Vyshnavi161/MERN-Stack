function changeText() {
    document.getElementById("title").innerText = "Text changed!";
}

function showName() {
    let name = document.getElementById("nameinput").value;
    document.getElementById("output").innerHTML = "Hello, " + name + "!";
}

function increment(){
    let count = document.getElementById("num").value;
    count++;
    document.getElementById("result").innerText = count;
}

function decrement(){
    let count = document.getElementById("num").value;
    count--;
    document.getElementById("result").innerText = count;
}

function addTask()
{
    let task = document.getElementById("taskInput").value;
    let listItem = document.createElement("li");
    listItem.innerText = task;
    document.getElementById("List").appendChild(listItem);
}

function calculateAge() {
    let birthYear = document.getElementById("year").value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    document.getElementById("result").innerText =
        "Your Age is " + age;
}