addEventListener("load", () => {
  const platform = document.getElementById("platform");
  const genre = document.getElementById("genre");
  const sale = document.getElementById("sale");
  const h5platform = document.getElementById("h5platform");
  const h5genre = document.getElementById("h5genre");
  const h5sale = document.getElementById("h5sale");

  function switchHook(section) {
    let state = section.style.display === "block";
    if (state) {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
  }

  h5platform.addEventListener("click", () => {switchHook(platform)});
  h5genre.addEventListener("click", () => {switchHook(genre)});
  h5sale.addEventListener("click", () => {switchHook(sale)});
});
