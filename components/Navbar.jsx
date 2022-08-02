import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-box">
                    <div className="nav-image">
                        <img id="image"
                            src="https://cdn2.iconfinder.com/data/icons/menu-white/64/menu_white_buttom__navbar-512.png"
                            className="brand-logo" alt="" />
                    </div>
                    <Link href='/Years'>
                        <a className=''>Year</a>
                    </Link>
                </div>

                <div className="nav-box">
                    <div className="nav-image">
                        <img id="cinema"
                            src="https://cdn5.vectorstock.com/i/thumb-large/84/19/realistic-detailed-cinema-bobbin-vector-4488419.jpg"
                            className="brand-logo" alt="" />
                    </div>
                    <Link href='/Genres'>
                        <a className="" >Genres</a>
                    </Link>
                </div>

                <div className="nav-box">
                    <div className="nav-image">
                        <img id="country" src="https://static.thenounproject.com/png/2450449-200.png" className="brand-logo" alt="" />
                    </div>
                    <Link href='/Country'>
                        <a className="">Countries</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar