import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Cart } from './components/pages/Cart';
import { Shopes } from './components/pages/Shopes';
import { SubCategory } from './components/pages/SubCategory';
import { data } from './Data';
import { shopAction } from './Redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(shopAction(data))
    // 
  }, [dispatch, Route])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shopes />} />
        <Route path="/subcategory/:id" element={<SubCategory />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<Shopes />} />
      </Routes>

    </div>
  );
}

export default App;
