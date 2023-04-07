import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ERROR from "./Error/ERROR"
import Authentication from "./routes/authentication/Authentication"
import Homes from "./routes/home/Homes"
import Navigation from "./routes/Navigation/Navigation"


const Shop =() => {
  return <h2>shop page</h2>
}
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigation/>,
    errorElement:<ERROR/>,
    children:[
      {
        index: true,
        element:<Homes />,
        errorElement:<ERROR/>,
      },
      {
        path:'auth',
        element:<Authentication/>,
        errorElement:<ERROR/>,
      },
      {
        path:'shop',
        element:<Shop/>,
        errorElement:<ERROR/>,
      },
    ]
  },
])
const  App = () => {
  return (
      <RouterProvider router={routes} />
  )
}

export default App
