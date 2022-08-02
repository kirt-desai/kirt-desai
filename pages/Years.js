import React from 'react'
import Head from 'next/head'
import { HomeHeader, Navbar, Contact, Product } from '../components/components'
import Link from 'next/link'
import { client } from '../lib/client'

const Years = ({ years }) => {
    return (
        <>
            <Head>

            </Head>
            <main>


                <h1 style={{ margin: '0', padding: '0', }}> Welcome to the Years Catalogue</h1>
                <p> Here you can find the movie shirts of the best movies from the past years!</p>
                <nav class="chrono">
                    <Link href='/'>
                        <a class="#">Back to Homepage</a>
                    </Link>
                    <img id="Latest year" src="https://pngimg.com/uploads/2022_year/2022_year_PNG20.png"
                        class="brand-logo" alt="" style={{ width: '20%' }} />
                    <Link href='/'>
                        <a class="#">Contact Information</a>
                    </Link>

                </nav>

                <p> We have numerous shirts from 2022 to the 2010s!</p>
                <h1> </h1>
                <nav class="product">
                    <div class="product-box">
                        <div class="product-rank">
                            
                            <div class="product-button">
                                <button class="buy-button">Buy</button>
                                <button class="cart-button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className='productContainer'>
                    {years?.map((year) => 
                        <Product key={year._id} product={year} prodType= "years" />
                    )}
                </div>
            </main>


        </>
    )
}
export const getServerSideProps = async () => {
    const query = '*[_type == "years"]';
    const years = await client.fetch(query);

    return {
        props: { years, }
    }
}
export default Years
