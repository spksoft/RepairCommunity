import { useState } from 'react';
import shopService from '@/services/shop';
import SearchBox from '@/components/SearchBox';

const ShopsPage = ({ shops, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  const [inputText, changeInputText] = useState('');
  const [tempShops, setTempShops] = useState(shops);
  const getSearchData = async () => {
    const searchResp = shopService.GetShopsBySearch(inputText);
    const [searchShops] = await Promise.all([searchResp]);
    console.log(searchShops);
    setTempShops(searchShops);
  };

  return (
    <ul>
      <SearchBox
        searchText={inputText}
        updateSearch={changeInputText}
        onClick={() => getSearchData()}
      />
      <button onClick={() => getSearchData()}>Search</button>
      {tempShops.map((shop) => {
        const id = shop.id;
        const url = `/shops/${id}`;
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
