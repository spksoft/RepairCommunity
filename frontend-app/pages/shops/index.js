import axios from 'axios';
import shopService from '@/services/shop';
import { useState, useCallback } from 'react';
import SearchBox from '@/components/SearchBox';

const ShopsPage = ({ shops, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  const [inputText, changeInputText] = useState('');
  const [tempShops, setTempShops] = useState(shops);
  const getSearchData = async () => {
    const res = await axios.get(
      `http://localhost:1337/api/Shops?filters[name][$contains]=${inputText}`
    );
    const resShops = res.data.data;
    setTempShops(resShops);
  };
  console.log(shops)
  return (
    <div>
      <ul>
        <SearchBox
          searchText={inputText}
          updateSearch={changeInputText}
          onClick={() => getSearchData()}
        />
        <button onClick={() => getSearchData()}>Search</button>
        {tempShops.map((shop) => {
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
    </div>
  );
};
ShopsPage.getInitialProps = async (ctx) => {
  const res = await axios.get('http://localhost:1337/api/Shops/?populate=*');
  const shopResp = shopService.getAllShops();
  const shops = await Promise.all([shopResp])
  // const shops = res.data.data;
  // console.log(xxshops)
  return { shops };

  // try {
  //   const res = await axios.get('http://localhost:1337/api/Shops/?populate=*');
  //   const tmpshops = shopService.getAllShop();
  //   const shops = res.data.data;
  //   console.log(shops)
  //   console.log(tmpshops)
  //   return { shops };
  // } catch (error) {
  //   return { error };
  // }
};

export default ShopsPage;
