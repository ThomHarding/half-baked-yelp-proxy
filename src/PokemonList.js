import PokemonItem from './PokemonItem';

export default function PokemonList({ pokemonSearch }) {
  console.log(pokemonSearch);
  return (
    <div className='list'>
      { 
        pokemonSearch.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon} />
        )
      }
    </div>
  );
}