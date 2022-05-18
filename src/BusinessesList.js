import BusinessItem from './BusinessItem';

export default function BusinessList({ yelpSearch }) {
  return (
    <div className='list'>
      { 
        yelpSearch.map(business => <BusinessItem key={business.id} businessItem={business} />
        )
      }
    </div>
  );
}