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
