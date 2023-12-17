function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                    
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonOl = document.getElementById('pokemonList');


pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToHtml).join('');
})