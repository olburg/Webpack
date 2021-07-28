// import users from "./user";
// import todos from "./todo";
// import albums from "./albums";
// import posts from "./posts";

import { getTodo } from "./todo";
import { getPosts } from "./posts";
import { getAlbums } from "./albums";

const Url = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  const response = await fetch(`${Url}/users`);
  const users = await response.json();
  renderUsers(users);
  usersListener();
};

import { renderUsers, usersListener } from "./user";

const tabsListenersInfo = (userId) => {
  const info = document.querySelector("#info");
  info.addEventListener("click", (event) => {
    event.preventDefault();
    getInfo(userId);
  });

  const todo = document.querySelector("#todo");
  todo.addEventListener("click", (event) => {
    event.preventDefault();
    getTodo(userId);
  });

  const post = document.querySelector("#posts");
  post.addEventListener("click", (event) => {
    event.preventDefault();
    getPosts(userId);
  });

  const albums = document.querySelector("#albums");
  albums.addEventListener("click", (event) => {
    event.preventDefault();
    getAlbums(userId);
  });
};

export { tabsListenersInfo, getInfo, getUsers, getTodo, getPosts, getAlbums };

const getInfo = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    .then((response) => response.json())
    .then((user) => {
      user = user[0];

      const content = document.querySelector("#content");
      // const abc = document.createElement("p");
      // abc.innerHTML = `${user.username}, ${user.email}, ${user.phone}`;
      // content.innerHTML = "";
      // content.appendChild(abc)

      content.innerHTML = `<p>${user.username}, ${user.email}, ${user.phone}</p>`;
    });
};

getUsers();
