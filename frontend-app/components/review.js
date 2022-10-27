function Review({ review }) {
  console.log(review);
  return (
    <div className="review">
      <h2>{review.attributes.review}</h2>
    </div>
  );
}
export default Review;
