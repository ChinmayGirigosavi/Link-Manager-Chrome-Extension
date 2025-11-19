// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// this 'if' statement will check if the variable 'leadsFromLocalStorage' is truthy.
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderList()
}

function renderList() {
    let listItems = "";
    // The loop iterates and builds the complete HTML string
    for (let i = 0; i < myLeads.length; i += 1) {
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems; 
}

saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList();
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    renderList();
})
console.log(typeof leadsFromLocalStorage);


