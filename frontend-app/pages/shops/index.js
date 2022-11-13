import axios from 'axios';
import { useState, useCallback } from 'react';
import SearchBox from '@/components/SearchBox';

const ShopsPage = ({ shops, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  const [inputText, setinputText] = useState('');
  return (
    <div>
      <SearchBox searchText={inputText} />
      <ul>
        {/* <p>ddd {inputSearch}</p> */}
        {shops.data.map((shop) => {
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
    const shops = res.data;
    return { shops };
  } catch (error) {
    return { error };
  }
};

export default ShopsPage;
