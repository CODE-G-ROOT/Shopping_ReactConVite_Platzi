import { NavLink } from 'react-router-dom';
import * as icons_bs from "react-icons/hi2";

import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';


const Navbar = () => {

    // variable que contiene el estilo a implementar con tailwind
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    const showCartProducts = () => {
        context.openCheckoutSideMenu(); // cambia el estado del sidemenu a true
        context.closeProductDetail(); // oculta el product Detail (cambia el estado a false)
    }

    return (
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-sm '>
                <ul className='flex gap-5 items-center'>
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
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/clothes'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/electronics'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/furnitures'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/toys'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/others'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
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
                        <NavLink to='/sign_in'>
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <div className='flex gap-3 items-center cursor-pointer'
                            onClick={() => showCartProducts()}
                        >
                            <icons_bs.HiMiniShoppingBag className='size-4' /> {context.count}
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;