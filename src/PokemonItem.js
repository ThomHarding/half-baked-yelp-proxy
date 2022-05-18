export default function PokemonItem({ pokemon }) {
  return (
    <div className='pokemon item'>
      <p>{pokemon.pokemon}</p>
      <img src={pokemon.url_image} />
    </div>
  );
}