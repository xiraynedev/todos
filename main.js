const list = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');

// const listArray = [...document.querySelectorAll('.todos span')];
// listArray.forEach(item => {
//   console.log(item.textContent.includes('Mario'))
// })

// filter todos
const filterTodos = (term) => {
  const arrayList = [...list.children];
  arrayList.filter((todo) => !todo.textContent.toLowerCase().includes(term))
   .forEach((todo) => todo.classList.add('filtered'));

   arrayList.filter((todo) => todo.textContent.toLowerCase().includes(term))
   .forEach((todo) => todo.classList.remove('filtered'));
};

// search keyup event
search.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase().trim();
  filterTodos(term);
});

// delete todos
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const generateTemplate = todo => {
  console.log(todo);
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash delete"></i>
        </li>
    `;
  return html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    const html = generateTemplate(todo);
    list.innerHTML += html;
    addForm.reset();
  }
});
