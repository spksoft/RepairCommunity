import shopService from '@/services/shop';

const ShopsPage = ({ shops, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {shops.map((shop) => {
        const id = shop.id;
        const url = `/shop/${id}`;
        return (
          <div key={id}>
            <a href={url}> {shop.attributes.name}</a>
            <h4>{shop.attributes.address_detail}</h4>
            <h4>latitude : {shop.attributes.latitude}</h4>
            <h4>longtitude : {shop.attributes.longitude}</h4>
          </div>
        );
      })}
    </ul>
  );
};

ShopsPage.getInitialProps = async () => {
  const shopResp = shopService.getAllShops();
  const [shops] = await Promise.all([shopResp]);
  return { shops };
};

export default ShopsPage;
