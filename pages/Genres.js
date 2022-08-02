import React from 'react'
import Head from 'next/head'
import { HomeHeader, Navbar, Contact, Product } from '../components/components'
import Link from 'next/link'
import { client } from '../lib/client'

const Genres = ({ genres }) => {
    return (
        <>
            <Head>
                <title>Genres</title>
            </Head>
            <main>
                <h1> Welcome to the Genres Catalogue</h1>
                <p> Here you can find the genre shirts ranging from sci-fi to action!</p>
                <nav class="chrono">
                    <div class="chrono-box">
                        <div class="chrono-rank">
                            <img id="Latest genre"
                                src="https://tse2.mm.bing.net/th?id=OIP.pecSJQOJDJ34XkD-gAGgHwHaHa&pid=Api&P=0&w=173&h=173"
                                class="brand-logo" alt="" style={{ width: '1200%' }} />
                        </div>
                        <Link href='/'>
                            <a class="#">Back to Homepage</a>
                        </Link>
                    </div>
                </nav>

                <h3> Tap on the image to check the shirt details. </h3>
                <nav class="product">
                    <div class="product-box">
                        <div class="product-rank">
                            <div class="product-button">
                                
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='productContainer'>
                    {genres?.map((genre) => 
                        <Product key={genre._id} product={genre} prodType="genres" />
                    )}
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "genres"]';
    const genres = await client.fetch(query);

    return {
        props: { genres, }
    }
}
export default Genres