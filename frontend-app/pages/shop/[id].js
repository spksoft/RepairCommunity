import Image from "next/image";
import axios from "axios";
import Modal from "../../components/modal/modal";
import Review from "../../components/review";

const Shop = ({ id, shop, reviews, reviewTags }) => {
  console.log(reviewTags);
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
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}

      <Modal shopId={shop.id} reviewTags={reviewTags} />
    </>
  );
};

Shop.getInitialProps = async (context) => {
  const id = context.query.id;
  const shopRes = await axios.get(
    `http://localhost:1337/api/Shops/${id}?populate=*`
  );
  const shop = shopRes.data.data;

  const reviewRes = await axios.get(
    `http://localhost:1337/api/reviews?filters[shopId]=${id}`
  );
  const reviews = reviewRes.data.data;

  const reviewTagRes = await axios.get("http://localhost:1337/api/review-tags");
  const reviewTags = reviewTagRes.data.data;

  return {
    id,
    shop,
    reviews,
    reviewTags,
  };
};

export default Shop;
