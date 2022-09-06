import React from 'react';
import Card from './Card';
import '../../../assets/styles/shop/Products.css';

const Products = ({ products }) => {
  return (
    <section aria-label="Products" className="products">
      <div className="content products__content">
        <h2 className="products__heading">Products</h2>
        <div className="products__wrapper">
          {products.map((prod) => (
            <Card
              id={prod.id}
              key={'product-card-' + prod.id}
              text={prod.text}
              description={prod.description}
              price={prod.price}
              img={prod.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
