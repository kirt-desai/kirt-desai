import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Head from 'next/head';
import { client, urlFor } from '../../../lib/client.js';
import { Product } from '../../../components/components';


const ProductDetails = ({ product, genres, countries, years }) => {

  const { image, name, price, details, movieUrl } = product;
  //const { decQty, incQty, qty, onAdd} = useStateContext();
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <main>
        <div>
          <div className="product-detail-container">
            <div>
              <div className="image-container">
                <img src={urlFor(image && image[0])}
                  classname="product-detail-image" />
              </div>
              <div className="small-images-container">
                {/* {image?.map((item,i) => (
                <img
                  src={urlFor(item)}
                  className={i === index ? 'small image selected-image' : 'small-image'}
                  onMouseEnters={() => setIndex(i)}
                />
              ))} */}
              </div>
            </div>
          </div>
        </div>

        <div className="product-details-desc" />
        <h1>{name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details: </h4>
        {/* <p>{details}</p>
          <p className = "price">${price}</p> */}
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus"
              onClick={decQty}><AiOutlineMinus /></
            span>
            <span className="num"
              onClick={qty}>0</span>
            <span className="plus"
              onClick={incQty}><AiOutlinePlus /></
            span>
          </p>
        </div>
        <div className="buttons">
          <button type="button"
            classname="add-to-cart"
            onClick={() => onAdd(product, qty)}>Add to Cart</button>
          <button type="button"
            className="buy-now" onClick="">Buy Now</button>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also want</h2>
          <div classname="marque">
            <div className="maylike-products-container track">
              {/* {countries?.map((country) => (
                  <Product key={country._id}
                  product={country} />
                ))} */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "countries"]{
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "years" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == 'years']`
  // const countriesQuery = `*[_type == 'countries']`
  // const genresQuery = `*[_type == 'genres']`
  // const yearsQuery = `*[_type == 'years']`
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  
  // const countries = await client.fetch(countriesQuery);
  // const genres = await client.fetch(genresQuery);
  // const years = await client.fetch(yearsQuery);

  return {
    props:
    {
      product,
      products
    }
  }
}

export default ProductDetails