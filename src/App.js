import './App.css';
import Home from './Home';
import Test2 from './Test2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<ProductDetail/>}/>
        </Routes>
      </Router>
    {/* <Test2/> */}
    </div>
  );
}

export default App;

{/* <div className="App">
<Navbar2/>
<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/detail/:id" element={<ProductDetail/>}/>
</Routes>
<Footer/>
<ProductDetail/>
<AllProducts/> */}

// </div>
