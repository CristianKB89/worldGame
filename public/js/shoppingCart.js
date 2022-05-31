function buyProducts(arr, userID) {
  console.log(arr);
  console.log(userID);

  arr.forEach((data) => {
    fetch("http://localhost:3000/products/addToLibrary/" + userID, {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userID,
        game_id: data.game.id,
      }),
    })
      .then((res) => {
        fetch("http://localhost:3000/shoppingCart/" + data.id, {
          method: "delete",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data.id,
          }),
        });
        window.location.href = "http://localhost:3000/users/profile/" + userID;
      })
      .catch((err) => console.log(err));
  });
}
