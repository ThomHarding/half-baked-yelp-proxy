export default function BusinessItem({ businessItem }) {
  return (
    <div className='yelp item'>
      <h2>{businessItem.name}</h2>
      <p>Rated {businessItem.rating} stars</p>
      <p>Phone number: {businessItem.phone}</p>
      <img src={businessItem.image_url} />
      <p>Currently {businessItem.is_closed ? 'closed.' : 'open!'}</p>
    </div>
  );
}