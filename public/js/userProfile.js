addEventListener("load", () => {
  const library = document.getElementById("library");
  const editForm = document.getElementById("editForm");
  const editButton = document.getElementById("editButton");
  const editCancel = document.getElementById("editCancel");
  const postButton = document.getElementById('postButton');
  const libraryButton = document.getElementById("libraryButton");
  const posts = document.getElementById('posts')

  editButton.addEventListener("click", (e) => {
    e.preventDefault;
    library.style.display = "none";
    posts.style.display = "none";
    editForm.style.display = "block";
  });
  editCancel.addEventListener("click", () => {
    library.style.display = "block";
    editForm.style.display = "none";
  });

  postButton.onclick = () =>{
    library.style.display = "none";
    posts.style.display = "block";
  }

  libraryButton.onclick = () =>{
    library.style.display = "block";
    posts.style.display = "none";
  }
});
