import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

export default function PokemonSearch() {
  const [pokemonSearch, setPokemonSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('pikachu');
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.

  async function load() {
    const response = await getPokemon(name);
    console.log(response);
    // setPokemonSearch(response.data.results);
        // put the jsonified data in state and set the loading state to false
    setLoading(false);
  }

  useEffect(() => {
    load();
      }, []); // eslint-disable-line

  async function handlePokemonSubmit(e) {
    console.log(e);
    console.log('bro cringe');
    e.preventDefault();
    // set the loading state to true
    setLoading(true);
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    load();
  }
  console.log(pokemonSearch);
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon
        <input value={name} onChange={e => setName(e.target.value)}/>
        {/* add inputs/labels for name, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>
      {/* ({loading} ? <PokemonList pokemonList={pokemonSearch}/> : <Spinner />) */}
      {/* Make a PokemonList component to import and use here. Use a ternary to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}