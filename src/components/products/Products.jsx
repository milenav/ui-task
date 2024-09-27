import './../../App.scss';
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <section className="product-section container-fluid">
            <h2 className="section-title">Our Products</h2>
            <div className="container">
                <div className="product-card-wrapper">
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}

export default Products;