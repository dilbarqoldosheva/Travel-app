'use client'
import React, { useState } from 'react'
import Nav from './nav'
import MobileNav from './MobileNav'

function ResponsiveNav() {
    const [showNav, setShowNav] = useState(false)
    const handNavShow = () => setShowNav(true)
    const handleCloseNav = () => setShowNav(false)
    return (
        <div>
            <Nav openNav={handNavShow} />
            <MobileNav showNav={showNav} closeNav={handleCloseNav} />
        </div>
    )
}

export default ResponsiveNav
