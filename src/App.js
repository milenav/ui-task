import './App.scss';
import Nav from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import News from './components/news/News';

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <News />
            <Products />
        </div>
    );
}

export default App;
