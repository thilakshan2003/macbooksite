import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  // Array of navigation items. Each object represents one link with a `label` property.

  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Logo" />

            <ul>
                {/**
                 * We iterate over the `navLinks` array and create one <li> per item.
                 * - .map returns an array of React nodes to render inside the <ul>.
                 * - Each <li> needs a unique `key` prop (here we use link.label).
                 * - Inside each <li> we render an <a> element showing the label.
                 */}
                {navLinks.map(link => (
                    <li key={link.label}>
                        {/* The href is '#' as a placeholder. Replace with a real URL or route when available. */}
                        <a href="#">{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-4'>
                <button><img src='/search.svg' alt='Search' /></button>
                <button><img src='/cart.svg' alt='Cart' /></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
