import { NavLink } from 'react-router-dom';

const Navbar = () => {

    // variable que contiene el estilo a implementar con tailwind
    const activeStyle = 'underline underline-offset-4'

    return (
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
                <ul className='flex gap-5 items-baseline'>
                    <li className='font-semibold text-lg'>
                        <NavLink 
                            to='/home'
                            >
                            Shoppy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/all'
                        // función que permite incorporar una clase, si ese "link" es seleccionado
                            // en este caso la clase es activeStyle la cual corresponde a underline
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/clothes'
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/electronics'
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/furnitures'
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/toys'
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/others'
                        className ={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Others
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex gap-5 items-center'>
                    <li className='text-black/'>
                        juanavila@gmail.com
                    </li>
                    <li>
                        <NavLink to='/my-orders'>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account'>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-order'>
                            My Order
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;