import axios from 'axios';
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
  return (
    <div>
      <ul>
        <SearchBox searchText={inputText} updateSearch={changeInputText} onClick={() => getSearchData()}/>
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
  try {
    const res = await axios.get('http://localhost:1337/api/Shops/?populate=*');
    const shops = res.data.data;
    return { shops };
  } catch (error) {
    return { error };
  }
};

export default ShopsPage;
