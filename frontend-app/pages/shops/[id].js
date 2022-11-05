import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Modal from "../../components/modal/modal";
import Review from "../../components/review";

const ShopPresenter = ({ shop, reviews, reviewTags }) => {
  const { id } = shop;
  const { name, address_detail, latitude, longitude, shop_images } = shop.attributes;

  // prepare shop image
  let url = "";
  if (shop_images.data !== null) {
    const name = shop_images.data[0].attributes.hash;
    url = "http://localhost:1337/uploads/" + name + ".jpg";
  }

  return (
    <>
      <Link href="/shops"> BACK</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>{name}</div>
      <div>{address_detail}</div>
      <div>{latitude}</div>
      <div>{longitude}</div>
      <div>{longitude}</div>
      <Image src={url} alt="None" width={100} height={100} />
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}

      <Modal shopId={id} reviewTags={reviewTags} />
    </>
  )
}

const Page = ({ shop, reviews, reviewTags }) => {
  let url = "";
  if (shop.attributes.shop_images.data !== null) {
    const name = shop.attributes.shop_images.data[0].attributes.hash;
    url = "http://localhost:1337/uploads/" + name + ".jpg";
  }
  return (
    <>
      <ShopPresenter
        shop={shop}
        reviews={reviews}
        reviewTags={reviewTags}
      />
    </>
  );
};

Page.getInitialProps = async (context) => {
  const shopId = context.query.id;
  const shopRes = await axios.get(
    `http://localhost:1337/api/Shops/${shopId}?populate=*`
  );
  const shop = shopRes.data.data;

  const reviewRes = await axios.get(
    `http://localhost:1337/api/reviews?filters[shopId]=${shopId}`
  );
  const reviews = reviewRes.data.data;

  const reviewTagRes = await axios.get("http://localhost:1337/api/review-tags");
  const reviewTags = reviewTagRes.data.data;

  return {
    shop,
    reviews,
    reviewTags,
  };
};

export default Page;
