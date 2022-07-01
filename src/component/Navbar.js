import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">MyToDo</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Completed Task</a></li>
                        <li><a>ToDo</a></li>
                        <li><a>Calender</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;