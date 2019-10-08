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
  let editBtn = document.createElement('button');

  li.id = input;
  li.innerText = input;

  li.style.color = priority;

  liBtn.innerText = 'Delete';
  editBtn.innerText = 'Edit';

  editBtn.addEventListener("click", function(event){
    let editInput = document.createElement('input');
    let saveBtn = document.createElement('button')

    editInput.type = 'text';
    editInput.value = input;
    editInput.id = 'edit';

    saveBtn.innerText = 'Save';

    saveBtn.addEventListener("click", function(){
      newInput = editInput.value;
      li.innerText = newInput;

      li.append(liBtn);
      li.append(editBtn);
    });

    li.append(saveBtn);
    li.append(editInput);
  });

  liBtn.addEventListener("click", function(event){
    event.preventDefault();
    li.parentNode.removeChild(li)
  });

  li.append(liBtn);
  li.append(editBtn);

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
    tasks.append(li);
  }
});
