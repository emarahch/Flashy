
const flashyList = document.querySelector(".flashyList");
const addTermToListButton = document.getElementById("addTermToListButton");
addTermToListButton.addEventListener("click", addToList);

function addToList(){
    const IndTerm = document.createElement("div");
    const inputsForm =document.createElement("form");
    IndTerm.setAttribute("class", "IndTerm");
    inputsForm.setAttribute("class", "inputsForm");

    const termDiv= document.createElement("div");
    termDiv.setAttribute("class", "termDiv");
    const term =document.createElement("input");
    term.setAttribute("type","text");
    const termLabel=document.createElement("label");
    termLabel.innerHTML="Term";
    termDiv.appendChild(term);
    termDiv.appendChild(termLabel);


    const defDiv = document.createElement("div");
    const def =document.createElement("input");
    def.setAttribute("type","text");
    const defLabel=document.createElement("label");
    defDiv.setAttribute("class", "defDiv");
    defLabel.innerHTML="Definition";
    defDiv.appendChild(def);
    defDiv.appendChild(defLabel);



    inputsForm.appendChild(termDiv);
    inputsForm.appendChild(defDiv);



    IndTerm.appendChild(inputsForm);
    flashyList.appendChild(IndTerm);
}