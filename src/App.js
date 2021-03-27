import { BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles'
import Hero from './components/Hero';
import Products from './components/Products'
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle /> 
      <Hero />
      <Products heading='Choose your favourite' data={productData} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
