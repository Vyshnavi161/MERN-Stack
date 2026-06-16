let applications =
JSON.parse(localStorage.getItem("applications")) || [];

function applyLoan() {

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let marks = document.getElementById("marks").value;
    let income = document.getElementById("income").value;

    if (name === "" || type === "") {
        alert("Please fill all required fields");
        return;
    }

    let status = "";

    if (type === "Student") {

        if (marks >= 80) {
            status = "Approved";
        } else {
            status = "Rejected";
        }

    } else if (type === "Employee") {

        if (income >= 50000) {
            status = "Approved";
        } else {
            status = "Rejected";
        }
    }

    let applicant = {
        id: Date.now(),
        name: name,
        type: type,
        marks: marks || "N/A",
        income: income || "N/A",
        status: status
    };

    applications.push(applicant);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    clearForm();
    displayApplications();
}

function displayApplications() {

    let table =
        document.getElementById("loanTable");

    table.innerHTML = "";

    applications.forEach(function (app) {

        table.innerHTML += `
        <tr>
            <td>${app.id}</td>
            <td>${app.name}</td>
            <td>${app.type}</td>
            <td>${app.marks}</td>
            <td>${app.income}</td>

            <td class="${app.status === "Approved"
                ? "approved"
                : "rejected"}">

                ${app.status}
            </td>

            <td>
                <button onclick="deleteApplication(${app.id})">
                    Delete
                </button>
            </td>

        </tr>
        `;
    });
}

function deleteApplication(id) {

    applications =
        applications.filter(app => app.id !== id);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    displayApplications();
}

function searchApplication() {

    let searchText =
        document.getElementById("search")
            .value
            .toLowerCase();

    let rows =
        document.querySelectorAll("#loanTable tr");

    rows.forEach(function (row) {

        let text =
            row.innerText.toLowerCase();

        if (text.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("income").value = "";
}

displayApplications();