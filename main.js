async function getPokemon(){
    let response = await fetch ("pokemon.json")
    let data = await response.json()
    // console.log(data)
    return data
}



getPokemon().then(pokemon => {
    console.log(pokemon[7])
let samplePokemon = pokemon[0]
document.body.innerHTML = `
<div class="a-pokemon">
    <div class="a-pokemon-id">${samplePokemon.id}</div>
    <div class="a-pokemon-name">${samplePokemon.name.english}</div>
    <div class="a-pokemon-type">${samplePokemon.type}</div>
    <div class="a-pokemon-stats-hp">${samplePokemon.base.HP}</div>
    <div class="a-pokemon-stats-attack">${samplePokemon.base.Attack}</div>
    <div class="a-pokemon-stats-defense">${samplePokemon.base.Defense}</div>
    <div class="a-pokemon-stats-speed">${samplePokemon.base.Speed}</div>
</div>
`
})