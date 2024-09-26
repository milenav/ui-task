import './Products.scss';
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col col-sm">
                    <ProductCard/>
                </div>
                <div className="col col-sm">
                    <ProductCard/>
                </div>
                <div className="col col-sm">
                    <ProductCard/>
                </div>

            </div>
        </section>
    )
}

export default Products;