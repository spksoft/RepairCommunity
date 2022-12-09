const Layout = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          {header}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
          {children}
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-5xl w-full">
          {footer}
        </div>
      </div>
    </div>
  )
}

export default Layout;