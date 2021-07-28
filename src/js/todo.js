
const getTodo = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((response) => response.json())
    .then((todo) => renderTodos(todo));
};

const renderTodos = (todoList) => {
  const todocontent = document.querySelector("#content");
  todocontent.innerHTML = "";

  todoList.forEach((todo) => {
    const p = document.createElement("p");
    p.innerText = todo.title;
    todocontent.appendChild(p);
    // document.querySelector("#content").innerHTML = `<p>${todo.title}</p>`
  });
};



export {getTodo}


