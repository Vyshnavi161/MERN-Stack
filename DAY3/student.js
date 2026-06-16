function addStudent() {
    //get values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    //validation
    if (name === "" || age === "" || course === "") {
        alert("Please fill in all fields.");
    }
    //create div card for result
    let card=document.createElement("div");
    //create classList
    card.classList.add("student-card");
    //add content
    card.innerHTML = 
    `<h3>${name}</h3>
    <p>Age: ${age}</p>
    <p>Course: ${course}</p>
    <button class="delete-button">Delete</button>`;

    //delete button
    let deleteBtn = card.querySelector(".delete-button");
    deleteBtn.onclick = function() {
        card.remove();
    }
    //Add page
    document.getElementById("studentList").appendChild(card);

    //clear fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

}