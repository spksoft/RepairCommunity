import Image from "next/image";
import Link from "next/link";
import shopService from "@/services/shop";
import reviewTagService from "@/services/reviewTag";
import config from "@/config/index";
import Modal from "@/components/modal/modal";
import Review from "@/components/review";
const { apiBaseUrl } = config;

const ShopPresenter = ({ shop, reviews, reviewTags }) => {
  const { id } = shop;
  const { name, address_detail, latitude, longitude, shop_images } = shop.attributes;

  // prepare shop image
  let url = "";
  if (shop_images.data !== null) {
    const name = shop_images.data[0].attributes.hash;
    url = `${apiBaseUrl}/uploads/${name}.jpg`;
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
  const shopResp =  shopService.GetByID(shopId);
  const reviewsResp =  shopService.GetReviewsByShopID(shopId);
  const reviewTagsResp =  reviewTagService.GetAll();
  const [shop, reviews, reviewTags] = await Promise.all([shopResp, reviewsResp, reviewTagsResp])

  return {
    shop,
    reviews,
    reviewTags,
  };
};

export default Page;
