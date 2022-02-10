import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Technology Insights Social Feed</h1>

                <div className="navContent">
                    <div className="navLinks"></div>
                    <Link to='/' >Comments</Link>
                </div>
            </section>
        </nav>
    )
}
