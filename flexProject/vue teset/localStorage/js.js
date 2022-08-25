const btn = document.querySelector('#bt');
const myCheckbox = document.querySelector('#chk');
const ul = document.querySelector('ul');
const inputText = document.querySelector('#add-book input');
const SpanDelete = `<span class="del">Delete</span>`;

 btn.addEventListener('click' ,function(e){
    const SpanName = document.createElement('span');
    SpanName.className='';
    SpanName.textContent=inputText.value;
    const li= document.createElement('li');
    li.style.display='block';
    li.innerHTML += SpanDelete;
    li.appendChild(SpanName);
    ul.appendChild(li);
    storeToLocalStore(inputText.value);
    inputText.value=""; 
    e.preventDefault();
 })

 myCheckbox.addEventListener('change',function(e){
    if(myCheckbox.checked===true){
        ul.style.display='none';
    }
    else{
        ul.style.display='block';
    }
 })
 //detele book element
 ul.addEventListener('click' , function(e){
    if(e.target.className==='del'){
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);
    }
 })

// when page is load

document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }
    else{
        tasks=localStorage.getItem('tasks').split(',');
    }
    for(let item of tasks){
        const SpanName = document.createElement('span');
        SpanName.className='';
        SpanName.textContent= item;
        const li= document.createElement('li');
        li.style.display='block';
        li.innerHTML += SpanDelete;
        li.appendChild(SpanName);
        ul.appendChild(li);
    }
})

 function storeToLocalStore(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=localStorage.getItem('tasks').split(',');
    
    }
    tasks.push(task);
    localStorage.setItem('tasks',tasks);
 }

 function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=localStorage.getItem('tasks').split(',');
    }

    for(let i=0; i<tasks.length;i++){
        if(tasks[i] === task){
            tasks.splice(i,1);
        }
    }
    if(tasks.length ===0){
        localStorage.clear();
    }
    else{
        localStorage.setItem('tasks',tasks);
    }
 }
 