export function getsavedPokemons(key:string) {
    const myPokemons =  localStorage.getItem(key)
    let savedPokemons = JSON.parse(String(myPokemons)) || [];

    return savedPokemons;
}

export function saveLink(key:string, newPokemon:any) {


    let pokemonStored =  getsavedPokemons(key);
    const hasPokemon = pokemonStored.some( (link:any) => link.id === newPokemon.id )

    if(hasPokemon) {
        console.log("This pokemon already exist in your list")
        return;
    }

    pokemonStored.push(newPokemon)
    localStorage.setItem(key, JSON.stringify(pokemonStored))
    console.log('Pokemon sucessfuly add')
}


export function deletePokemon( links:any, id:number) {
    let myPokemons = links.filter( (item:any) => {
        return (item.id !== id)
    })

    localStorage.setItem('@mypoke', JSON.stringify(myPokemons))
    console.log('Link sucessfuly deleted!')
    return myPokemons;
}