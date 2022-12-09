const Card = ({ children, className = "" }) => {
  return (
    <>
      <div className="card w-56 bg-base-100 shadow-xl">
        <div className={`card-body ${className}`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Card;