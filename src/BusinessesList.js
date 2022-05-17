import BusinessItem from './BusinessItem';

export default function BusinessList(businessList) {
  return (
    <div className='list'>
      { 
        businessList.map(business => <BusinessItem key={business.id} business={business} />
        )
      }
    </div>
  );
}