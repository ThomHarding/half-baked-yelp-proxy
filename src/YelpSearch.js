import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { getYelpData } from './services/fetch-utils';
import BusinessList from './BusinessesList.js';

export default function YelpSearch() {
  const [yelpSearch, setYelpSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState('Chicago');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
      // you'll need to track your yelp search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.

  async function load() {
    const results = await getYelpData(cityName);
    setYelpSearch(results.data.businesses);
        // put the jsonified data in state and set the loading state to false
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line

  async function handleYelpSubmit(e) {
    e.preventDefault();
    // set the loading state to true
    setLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the yelp name as a query param in the URL
    load();
  }

  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        <input value={cityName} onChange={e => setCityName(e.target.value)}/>
        <input value={state} onChange={e => setCountry(e.target.value)}/>
        <input value={country} onChange={e => setState(e.target.value)}/>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get yelp</button>
      </form>
      {loading ? <BusinessList businessSearch={yelpSearch}/> : <Spinner />}
      {/* Make a businessesList component to import and use here. Use a ternary to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}