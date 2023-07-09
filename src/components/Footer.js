import React from 'react'
import '../styles/style.css'
import logo from '../images/Logo.png'
export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <h1 className='footer__title'>Contact Us</h1>
                <div>
                    <h2>Email</h2>
                    <p>needhelp@Organia.com</p>
                </div>
                <div>
                    <h2>Phone</h2>
                    <p>  666 888 888</p>
                </div>
                <div>   <h2>Address</h2>
                    <p>88 road, borklyn street, USA</p></div>
            </div>
            <div className='footer__center'>
                <img src={logo} />
                <p>Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing </p>
            </div>
            <div>
                <h1 className='footer__title'>Utility Pages</h1>
                <div>
                    <p>Style Guide</p>
                    <p> 404 Not Found</p>
                    <p> Password Protected</p>
                    <p> Licences</p>
                    <p> Changelog</p>
                </div>
            </div>
        </div>
    )

}
