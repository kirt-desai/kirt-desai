import React from 'react';
import Link from 'next/link'

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price }, prodType, number }) => {
  return (
    <div className='productParent'>
      <Link href={`/product/${prodType}/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image prodImg"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <div class="product-button">
            <button class="buy-button">Buy</button>
            <button class="cart-button">Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  )
}
// export const getStaticProps = async ({ params})
//   const query = `*[_type == "product" && slug. current == '${slug}'][0]`;
// params: { 
//   slug: product.slug.current
//  }
//  }) => {
//   const productsQuery = '*[_type == "product"]'

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }

export default Product