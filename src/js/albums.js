const getAlbums = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then((response) => response.json())
    .then((album) => renderAlbums(album));
};

const renderAlbums = (albumsList) => {
  const albumscontent = document.querySelector("#content");
  albumscontent.innerHTML = "";
  albumsList.forEach((album) => {
    document.querySelector("#content").innerHTML += `<p>${album.title}</p>`;
  });
};

export { getAlbums };
