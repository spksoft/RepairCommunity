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

console.log(Object.keys(shops.data[0].attributes.shop_images.data[0].attributes.url))
var re = "tmp";
for (let i = 0; i < 1; i++) {
  console.log(i)
  var name = shops.data[i].attributes.shop_images.data[0].attributes.hash;
  var url = "http://localhost:1337/uploads/" + name + ".jpg";
  console.log(name)
}
  return (
    <ul>
      {url}
      {shops.data.map(shop => (
        <div key={shop.id}>{shop.attributes.name}
        <h4>{shop.attributes.address_detail}</h4>
        <h4>latitude : {shop.attributes.latitude}</h4>
        <h4>longtitude : {shop.attributes.longitude}</h4>
        <h4>Image name : {shop.attributes.shop_images.data[0].attributes.name}</h4>
        name = {shop.attributes.shop_images.data[0].attributes.name}
        <Image src={url} alt='Dynamic Image' layout='fill'/> 
        </div>
      ))}
      {/* <div>{shops.data[0].attributes.shop_images.data[0].attributes.name}</div> */}
      {/* <img src="http://localhost:1337/uploads/20180326_082808_004_e38da4eda9.jpg"/> */}
    </ul>
  );
};
Home.getInitialProps = async ctx => {
  // export async function getStaticProps() {
  try {
    const res = await axios.get('http://localhost:1337/api/Shops/?populate=*');
    const shops = res.data;

    return { shops };
  } catch (error) {
    return { error };
  }
};
export default Home;