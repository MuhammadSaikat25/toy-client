import React from 'react';
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='grid lg:grid-cols-2 mt-10 bg-pink-100'>
           <div className="w-1/2 space-y-3">
            <img className='w-[100px]' src={logo} alt="" />
            <p>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
            <p>Address: 1800 Abbot Kinney Nebraska UK</p>
            <p>Email: hello@example.com</p>
            <p>Phone: (012) 345 6789</p>
           </div>
           <div className="font-bold">
                <h1>Quick Links</h1><br /><br />
                <Link>Help Center</Link><br /><br />
                <Link>Redeem Voucher</Link><br /><br />
                <Link>Polices & Rules</Link><br /><br />
           </div>
        </div>
    );
};

export default Footer;