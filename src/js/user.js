import {tabsListenersInfo, getInfo} from "./app"

const renderUsers = (users) => {
  const sect = document.querySelector("#users");
  users.forEach((user) => {
    sect.innerHTML += `<div id="user_${user.id}"><h3>${user.username}</h3></div>`;
  });
};

const usersListener = () => {
  const list = document.querySelectorAll("#users > div");
  for (let item of list) {
    item.addEventListener("click", (event) => {
      const [, id] = event.currentTarget.id.split("_");
      document.querySelector("#tabs").classList.remove("hidden");
      getInfo(id);

      tabsListenersInfo(id);
    });
  }
};

export { renderUsers, usersListener };
