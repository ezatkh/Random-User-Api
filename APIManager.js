class APIManager {
  constructor() {
    this.data = {};
  }

  getUserData() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (users) => {
        let userObject = {
          firstName: users.results[0].name.first,
          lastName: users.results[0].name.last,
          city: users.results[0].location.city,
          state: users.results[0].location.state,
          image: users.results[0].picture.medium,
        };
        this.data.users = userObject;

        let friendsObject = users.results.map((user) => {
          return { firstName: user.name.first, lastName: user.name.last };
        });
        friendsObject.splice(0, 1);
        this.data.friends = friendsObject;
      },
    });
  }
  getQuoteData() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest/",
      success: (quote) => {
        this.data.quote = quote.quote;
      },
    });
  }

  getPokemonData() {
    const MAX = 949;
    const random = Math.ceil(Math.random() * MAX);
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${random}/`,
      success: (pokemom) => {
        const proper = pokemom.name[0].toUpperCase() + pokemom.name.slice(1);
        const pokemonObject = {
          name: proper,
          image: pokemom.sprites.front_default,
        };
        this.data.pokemon = pokemonObject;
      },
    });
  }

  getBacoData() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (baco) => {
        this.data.bacon = baco[0];
      },
    });
  }
  getData() {
    return this.data;
  }
}
