tasksList = [];
document.addEventListener("DOMContentLoaded", () => {
  // your code here

document.getElementById('create-task-form').addEventListener('submit', handleSubmit);
document.getElementById('cre')

function handleSubmit(event) {
  event.preventDefault();
  let input = document.getElementById('new-task-description');
  renderTask(input);
  input.value = "";
}

function handleDelete(event) {
  event.target.parentNode.remove();
}

function handlePriorityChange(event) {
  console.log(event.target);
  event.target.parentNode.style.color = event.target.value;
  tasksList.sort(sort_by_color);
  console.log("sorted");
  updateTasks(tasksList);
}



function renderTask(input) {
  let task = input.value;
  let task_tag = document.createElement("li");
  task_tag.textContent = task;
  tasksList.push(task_tag);
  renderDeleteButton(task_tag);
  renderPriority(task_tag);
  document.getElementById('tasks').appendChild(task_tag);
}

function updateTasks(taskList) {
  ul = taskList[0].parentNode
  ul.innerHTML = "";
  for (task of taskList) {
    ul.appendChild(task);
  }
}

function renderDeleteButton(task_tag) {
  let delete_button = document.createElement("button");
  delete_button.innerHTML = "X";
  task_tag.appendChild(delete_button);
  delete_button.id = `delete_button-${tasksList.indexOf(task_tag)}`;
  task_tag.appendChild(delete_button);
  delete_button.addEventListener('click', handleDelete);
}

function renderPriority(task_tag) {
  priority_tag = document.createElement("Select");
  options = ['red','yellow','green'];
  option_tags = options.map( option => {
    let option_tag = document.createElement("option");
    option_tag.text = option;
    option_tag.style.color = option;
    priority_tag.appendChild(option_tag);
    return option_tag;
  })
  task_tag.appendChild(priority_tag);
  priority_tag.addEventListener("change", handlePriorityChange);
}

function sort_by_color(a,b) {

  if (a.style.color==='red') {
    return -1;
  }
  else if (b.style.color ==='red') {
    return 1;
  }
  else if (a.style.color === 'green') {
    return 1;
  }
  else if (b.style.color === 'green') {
    return -1;
  }
  else {
    return 0;
  }
}




});