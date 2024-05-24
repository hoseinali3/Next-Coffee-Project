import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Navbar() {

    let router = useRouter()
    let dataLink = ['/', '/about', '/service', '/menu', '/pages', '/contact', '/reservation', '/testimonial']


    console.log(router);


    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <Link href="/" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <Link href="/" className={`nav-item nav-link ${router.pathname === dataLink[0] ? 'active' : ''}`}>Home</Link>
                        <Link href="about" className={`nav-item nav-link ${router.pathname === dataLink[1] ? 'active' : ''}`}>About</Link>
                        <Link href="service" className={`nav-item nav-link ${router.pathname === dataLink[2] ? 'active' : ''}`}>Service</Link>
                        <Link href="menu" className={`nav-item nav-link ${router.pathname === dataLink[3] ? 'active' : ''}`}>Menu</Link>
                        <div className="nav-item dropdown">
                            <Link href="#" className={`nav-link dropdown-toggle`}
                                data-toggle="dropdown">Pages</Link>
                            <div className={`dropdown-menu text-capitalize`}>
                                <Link href="reservation" className={`dropdown-item ${router.pathname === dataLink[6] ? 'active' : ''}`}>Reservation</Link>
                                <Link href="testimonial" className={`dropdown-item ${router.pathname === dataLink[7] ? 'active' : ''}`}>Testimonial</Link>
                            </div>
                        </div>
                        <Link href="contact" className={`nav-item nav-link ${router.pathname === dataLink[5] ? 'active' : ''}`}>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar