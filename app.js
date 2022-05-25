const addForm = document.querySelector('.add');
const list = document.querySelector('.toDos');
const search = document.querySelector('.search input');


const generateTemplate = toDo => {

    const html = `<li>
    <span>${toDo}</span>
    <i class="fa-solid fa-trash delete"></i>
  </li>`

  list.innerHTML += html;
}

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const toDo = addForm.add.value.trim();

    if(toDo.length){
        generateTemplate(toDo);
        addForm.reset();
    }
    
});

list.addEventListener('click', e => {

   if(e.target.classlist = 'delete'){

        e.target.parentElement.remove();
    }
});

const filter = (word) =>{

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(word))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(word))
        .forEach((todo) => todo.classList.remove('filtered'))
}

search.addEventListener('keyup', () =>{

    const word = search.value.trim().toLowerCase();
    filter(word);
});

