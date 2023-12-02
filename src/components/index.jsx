import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/all'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
                <li>
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
        </>
    );
};

export default Navbar;