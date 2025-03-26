import { Suspense } from "react"


const Layout = ({ children }) => {
  return (

    <Suspense fallback={<div className="loader"></div>}>

      <div className="container mx-auto mt-5">{children}</div>

    </Suspense>
  )
}
export default Layout