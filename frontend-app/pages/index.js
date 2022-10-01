import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Header from '../components/header'

const Home = ({ shops, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {shops.data.map(shop => (
        <div key={shop.id}>{shop.attributes.name}
        <h4>{shop.attributes.address_detail}</h4>
        </div>
      ))}
    </ul>
  );
};
Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/shops');
    const shops = res.data;
    return { shops };
  } catch (error) {
    return { error };
  }
};
export default Home;