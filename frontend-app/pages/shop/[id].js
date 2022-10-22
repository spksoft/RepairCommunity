import Image from "next/image";
import axios from "axios";
import Modal from "../../components/modal/modal";

const Shop = ({ shop, error }) => {
  let url = "";
  if (shop.attributes.shop_images.data !== null) {
    const name = shop.attributes.shop_images.data[0].attributes.hash;
    url = "http://localhost:1337/uploads/" + name + ".jpg";
  }
  return (
    <>
      <a href="/shopList"> BACK</a>
      <div>{shop.attributes.name}</div>
      <div>{shop.attributes.address_detail}</div>
      <div>{shop.attributes.latitude}</div>
      <div>{shop.attributes.longitude}</div>
      <div>{shop.attributes.longitude}</div>
      <Image src={url} alt="None" width={100} height={100} />
      <Modal shopId={shop.id}/>
    </>
  );
};

Shop.getInitialProps = async (context) => {
  const id = context.query.id;
  const url = `http://localhost:1337/api/Shops/${id}?populate=*`;
  try {
    const res = await axios.get(url);
    const shop = res.data.data;

    return { shop };
  } catch (error) {
    return { error };
  }
};

export default Shop;
