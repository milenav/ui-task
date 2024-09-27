import productData from './../../product.json';
import './Products.scss';

const ProductCard = () => {
    return (
        <>
            {productData.map((product, index) => (
                <article key={index} className="product-card col-3 col-sm">
                    <h3 className="product-title">{product.title}</h3>
                    <img className="product-img" src={product.image} alt={product.alt}/>
                </article>
            ))}
        </>
    )
}

export default ProductCard;