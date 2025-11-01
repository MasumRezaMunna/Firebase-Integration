import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">About us</Link>
    <Link to="/contact" className="link link-hover">Contact</Link>
    <Link to="/donate" className="link link-hover">Donate</Link>
  </nav>
  <nav>
        <div>
            <h1 className='text-5xl'>🥂</h1>
        </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by TMT BROWS</p>
  </aside>
</footer>
    );
};

export default Footer;