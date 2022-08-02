import React from 'react'
import Head from 'next/head'
import { HomeHeader, Navbar, Contact, Product } from '../components/components'
import Link from 'next/link'
import { client } from '../lib/client'

const Country = ({ countries }) => {
    return (
        <>
            <Head>
                <title>Countries</title>
            </Head>
            <main id='countryMain'>
                <h1> Welcome to the Countries Catalogue</h1>
                <p> Here you can find country shirts ranging from US to other countries!</p>
                <nav class="chrono">
                    <div class="chrono-box">
                        <div class="chrono-rank">
                            <img id="American shirt" src="https://worldfilmsociety.org/assets/icons/worldwide.png"
                                class="brand-logo" alt="" style={{ width: '100%'}} />
                        </div>
                        <Link href='/'>
                            <a class="#">Back to Homepage</a>
                        </Link>
                    </div>
                </nav>
                <div className='productContainer'>
                    {countries?.map((country) => 
                        <Product key={country._id} product={country} prodType ="countries" number="1"/>
                    )}
                </div>
                <nav class="product">
                    <div class="product-box">
                        <div class="product-rank">
                            <div class="product-button">
                            </div>
                        </div>
                    </div>
                </nav>

            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "countries"]`;
    const countries = await client.fetch(query);

    return {
        props: { countries, }
    }
}
export default Country