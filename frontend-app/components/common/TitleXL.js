const TitleXL = ({ children, className = "" }) => {
  return (
    <>
      <h1 className={`text-xl font-bold ${className}`}>{children}</h1>
    </>
  )
}

export default TitleXL;