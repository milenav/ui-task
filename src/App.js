import './App.scss';
import Nav from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
        <Products />
    </div>
  );
}

export default App;
