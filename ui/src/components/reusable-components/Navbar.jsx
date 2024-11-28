import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//React-icons
import { FaBarsStaggered, FaBlog, FaSwatchbook, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ]
    return (
        <header className='w-full z-10 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4  ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>

                    {/* Insert logo */}
                    <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaSwatchbook className='inline-block' />Booklab</Link>

                    {/* nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map((item) => {
                                return (
                                    <li key={item.link}>
                                        <Link to={item.path} className='text-black block text-base uppercase font-semibold cursor-pointer hover:text-blue-700'>{item.link}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* menu button for mobile device */}
                    <div className='md:hidden'>
                        <button onClick={hamburgerMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 x-5 text-black' /> : <FaBarsStaggered className='h-5 x-5 text-black' />
                            }
                        </button>
                    </div>
                </div>

                {/* navicons for sm devices */}
                <div className={`space-y-4 px-4 py-7 mt-16 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='text-white block text-base uppercase cursor-pointer '>{link}</Link>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;