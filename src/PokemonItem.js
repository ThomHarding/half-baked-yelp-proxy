export default function PokemonItem(pokemonItem) {
  return (
    <div className='pokemon item'>
      <p>{pokemonItem.name}</p>
      <img src={pokemonItem.urlImage} />
    </div>
  );
}