document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const btn = document.getElementById("submit-button");
  const htasks = document.getElementById("htasks");
  const mtasks = document.getElementById("mtasks");
  const ltasks = document.getElementById("ltasks");
  const form = document.getElementById("create-task-form");
  // const select = document.createElement("select");
  // const high = document.createElement("option");
  // const med = document.createElement("option");
  // const low = document.createElement("option");
  // const input = document.createElement("input");
  // input.setAttribute("type","text");
  // input.setAttribute("placeholder","user");
  // form.append(input);
  // form.append(select);
  // select.append(high);
  // select.append(med);
  // select.append(low);
  // high.innerText = "High";
  // med.innerText = "Medium";
  // low.innerText = "Low";
  btn.addEventListener("click", function(event){
    event.preventDefault();
    let comment = document.getElementById("new-task-description").value;
    const user = document.getElementById("new-task-user").value;
    const deletebtn = document.createElement("button")
    const editbtn = document.createElement("button")
    const li = document.createElement("li");
    if (document.querySelector("select").value == 2){
      htasks.append(li);
    } else if(document.querySelector("select").value == 1){
      mtasks.append(li);
    } else {
      ltasks.append(li);
    }
    li.innerText = comment + " to be done by " + user + "     ";
    li.append(deletebtn);
    li.append(editbtn);
    deletebtn.innerText = "x";
    editbtn.innerText = "EDIT";
    deletebtn.addEventListener("click", function(){
        li.remove();
    })
    editbtn.addEventListener("click", function(){
      const edit = document.createElement("input");
      edit.setAttribute("type","text");
      edit.setAttribute("id","edit-input");
      if (editbtn.innerText == "EDIT"){
        li.append(edit);
        editbtn.innerText = "SAVE";
      } else if(editbtn.innerText == "SAVE"){
        li.innerText = document.getElementById("edit-input").value;
        li.append(deletebtn);
        li.append(editbtn);
        editbtn.innerText = "EDIT";
      }
  })
    if(document.querySelector("select").value == 2){
      li.style.color = "red";
    } else if(document.querySelector("select").value == 1) {
      li.style.color = "orange";
    } else if(document.querySelector("select").value == 0){
      li.style.color = "green";
    }

  })
});
