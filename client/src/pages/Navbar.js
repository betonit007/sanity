import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink
                        to='/'
                        exact
                        activeClassName='text-white'
                        className='hover:text-green-800 py-6 px-3 mr-4 text-4xl font-bold cursive tracking-widest'
                    >
                        Tim Nagorski
                    </NavLink>
                    <NavLink
                        to='/post'
                        exact
                        activeClassName='text-white'
                        className='hover:text-green-800 px-5 p-3 my-6 rounded'
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to='projects'
                        exact
                        activeClassName='text-white'
                        className='hover:text-green-800 px-5 p-3 my-6 rounded'
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to='/about'
                        exact
                        activeClassName='text-white'
                        className='hover:text-green-800 px-5 p-3 my-6 rounded'
                    >
                        About
                    </NavLink>
                </nav>
                <div className='flex items-center'>
                    <SocialIcon
                        url="https://twitter.com/Timmydrone"
                        className='mx-3'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/Timmydrone"
                        className='mx-3'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/Timmydrone"
                        className='mx-3'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/Timmydrone"
                        className='mx-3'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    )
}

export default Navbar
