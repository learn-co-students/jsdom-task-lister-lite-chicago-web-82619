document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let submitBtn = document.querySelectorAll('input')[1];
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let priority = document.getElementById('priority').value;
  let input = document.querySelectorAll('input')[0].value;
  let tasks = document.getElementById('tasks');
  let li = document.createElement('li');
  let liBtn = document.createElement('button');

  li.id = input;
  li.innerText = input;

  li.style.color = priority;

  liBtn.innerText = 'Delete';

  liBtn.addEventListener("click", function(event){
    event.preventDefault();
    li.parentNode.removeChild(li)
  });

  li.append(liBtn);

  if (priority === 'red'){
    let tasks = document.getElementById('h-tasks');
    tasks.append(li);
  }
  else if (priority === 'yellow'){
    let tasks = document.getElementById('m-tasks');
    tasks.append(li);
  }
  else {
    let tasks = document.getElementById('l-tasks');
  }
});

