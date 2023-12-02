import Home from '../home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'

import './App.css'


function App() {

  return (
    <>
      <div className='bg-red-100'>
        <MyAccount></MyAccount>
        <Home></Home>
        <MyOrder></MyOrder>
        <MyOrders></MyOrders>
        <NotFound></NotFound>
        <SingIn></SingIn>
      </div>
    </>
  )
}

export default App
