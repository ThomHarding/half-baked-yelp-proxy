export default function BusinessItem(businessItem) {
  return (
    <div className='business item'>
      <h2>{businessItem.name}</h2>
      <p>{businessItem.price}</p>
      <p>{businessItem.phone}</p>
      <img src={businessItem.image_url} /> 
    </div>
  );
}