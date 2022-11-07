const Avatar = ({ src, className = "" }) => {
  return (
    <div className="avatar">
      <div className={`rounded-full ${className}`}>
        <img src={src} />
      </div>
    </div>
  )
}

export default Avatar;