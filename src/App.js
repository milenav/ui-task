import './App.scss';
import Nav from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <News />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
