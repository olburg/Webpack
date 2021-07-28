const getPosts = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((post) => renderPosts(post));

  // const content = document.querySelector("#content");
  // content.innerHTML += `<p>${post.title}</p>`;
};

const renderPosts = (postList) => {
  const postcontent = document.querySelector("#content");
  postcontent.innerHTML = "";
  postList.forEach((post) => {
    document.querySelector("#content").innerHTML += `<p>${post.title}</p>`;
  });
};

export {getPosts, renderPosts}