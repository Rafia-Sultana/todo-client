import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">MyToDo</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 ">
                        <NavLink className='me-4 p-2' to='/'>Home</NavLink>
                        <NavLink className='me-4 p-2' to='/completedtask'>Completed Task</NavLink>
                        <NavLink className='me-4 p-2' to='/calender'>Calender</NavLink>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;