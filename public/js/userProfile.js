addEventListener("load", () => {
  const library = document.getElementById("library");
  const editForm = document.getElementById("editForm");
  const editButton = document.getElementById("editButton");
  const editCancel = document.getElementById("editCancel");

  editButton.addEventListener("click", (e) => {
    e.preventDefault;
    library.style.display = "none";
    editForm.style.display = "block";
  });
  editCancel.addEventListener("click", () => {
    library.style.display = "block";
    editForm.style.display = "none";
  });
});
