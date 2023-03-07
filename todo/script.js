let input = document.querySelector('.todo-input');
let addBtn = document.querySelector('.todo-submit');
let tasks = document.querySelector('.tasks');

//enable & disable add button
input.addEventListener('keyup', () => {
    if (input.value.trim() != 0){
        addBtn.classList.add('active')
    }
    else {
        addBtn.classList.remove('active')
    }
})

//adding new tasks to list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p> ${input.value}</p>
        <div class="item-btn">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-regular fa-rectangle-xmark"></i>
    </div>
    `;
    tasks.appendChild(newItem);
    input.value = '';
    } else {
        alert('Please enter a task')
    }
})

//delete from list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-rectangle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark as complete
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

//fetching the hits

const $ = document.querySelector.bind(document);
$('#hitcount').addEventListener('click',()=>{
 fetch('/hits')
 .then(r=>r.text())
 .then(txt=>$('#hitcount').innerText = txt);
});
