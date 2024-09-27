import './App.scss';
import Nav from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import News from './components/news/News';
import Solution from './components/solution/Solution';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <News />
            <Products />
            <Solution />
            <Footer />
        </div>
    );
}

export default App;
