
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import FeatureProducts from './components/FeatureProducts';
import Home from './components/Home';
import Nav from './components/Nav';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='orderSummary' element={<OrderSummary/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeatureProducts/>}/>
        <Route  path='featured' element={<FeatureProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
      <Route path=':userId' element={<UserDetails/>}/>
      </Route>
    </Routes>
    </div>
   
  );
}

export default App;
