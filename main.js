async function getAllPokemon(){
    let response = await fetch ("pokemon.json")
    let data = await response.json()
    // console.log(data)
    return data
}

function getPokemonHtml(samplePokemon){
    return `
    <div class="a-pokemon">
        <div class="a-pokemon-id">${samplePokemon.id}</div>
        <div class="a-pokemon-name">${samplePokemon.name.english}</div>
        <div class="a-pokemon-type">${samplePokemon.type}</div>
        <div class="a-pokemon-stats">HP:${samplePokemon.base.HP}</div>
        <div class="a-pokemon-stats">Attack:${samplePokemon.base.Attack}</div>
        <div class="a-pokemon-stats">Defense:${samplePokemon.base.Defense}</div>
        <div class="a-pokemon-stats">Speed:${samplePokemon.base.Speed}</div>
        <div class="a-pokemon-name-2">${samplePokemon.name.japanese}</div>
        <div class="a-pokemon-name-2">${samplePokemon.name.chinese}</div>
        <div class="a-pokemon-name-2">${samplePokemon.name.french}</div>
    </div>
    `
}


function displayPokedex(allPokemon)  {
    let samplePokemon = allPokemon[0]
    console.log(samplePokemon)
    document.body.innerHTML = `<div class="my-pokedex">
    ${allPokemon.map(samplePokemon => getPokemonHtml(samplePokemon)).join('')}
    </div>`
}
getAllPokemon().then(displayPokedex)