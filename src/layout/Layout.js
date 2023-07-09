import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer'
export const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
