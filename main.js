let api = new APIManager();
let rend = new Renderer();

$("#load").click(function () {
  api.getUserData();
  api.getPokemonData();
  api.getQuoteData();
  api.getBacoData();
});
$("#display").click(function () {
  let friendsInfo = api.getData().friends;
  rend.friendsRender(friendsInfo);

  let userInfo = api.getData().users;
  rend.userRender(userInfo);

  let quoteInfo = api.getData().quote;
  rend.quoteRender(quoteInfo);

  let pokemonInfo = api.getData().pokemon;
  rend.pokemonRender(pokemonInfo);

  let bacoInfo = api.getData().bacon;
  rend.paconRender(bacoInfo);
});
$("#saveUser").click(function () {
  let userSnapshot = {
    user: api.getData().users,
    friends: api.getData().friends,
    quote: api.getData().quote,
    pokemon: api.getData().pokemon,
    usbaconer: api.getData().bacon,
  };
  let getlocalStorageUsers =
    JSON.parse(localStorage.getItem("profileUser")) || [];
  if (userSnapshot.user === undefined) {
    alert("There is nothing to save ");
  } else {
    getlocalStorageUsers.push(userSnapshot);
    localStorage.setItem("profileUser", JSON.stringify(getlocalStorageUsers));
  }
  rend.dropDownRender(getlocalStorageUsers);
  $(".dropdown-content").css("display", "block");
});
$("#loadUser").click(function () {
  const profileUser = JSON.parse(localStorage.getItem("profileUser"));
  if (profileUser == null) alert("No users saved to show ..!");
  else {
    let getlocalStorageUsers =
      JSON.parse(localStorage.getItem("profileUser")) || [];

    let selected = $("#option").val();

    getlocalStorageUsers.forEach((userProfile) => {
      let fullName =
        userProfile.user.firstName + " " + userProfile.user.lastName;
      if (fullName == selected) {
        rend.friendsRender(userProfile.friends);
        rend.userRender(userProfile.user);
        rend.quoteRender(userProfile.quote);
        rend.pokemonRender(userProfile.pokemon);
        rend.paconRender(userProfile.usbaconer);
      }
    });
  }
});
$("#clearUsers").click(function () {
  let getlocalStorageUsers =
    JSON.parse(localStorage.getItem("profileUser")) || [];
  localStorage.removeItem("profileUser");
  rend.dropDownRender(getlocalStorageUsers);
});
