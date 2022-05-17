import PokemonItem from './PokemonItem';

export default function PokemonList(pokemonList) {
  return (
    <div className='list'>
      { 
        pokemonList.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon} />
        )
      }
    </div>
  );
}