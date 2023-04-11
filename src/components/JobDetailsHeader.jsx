import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import vector from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png'

const JobDetailsHeader = () => {

    const loc = useLocation();
    const dynamicPathName = loc.pathname.split('/')[1];
    return (
        <div style={{ backgroundImage: `url(${vector}), url(${vector2})`,
        backgroundRepeat : 'no-repeat',
        height : '300px',
        backgroundPosition: 'left bottom, top right',
      
        }} className='py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 bg-gray-100'>
            
            <div className='relative flex items-center justify-between'>
                <div className='font-bold text-3xl'>Job Portal</div>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/Statistics'

                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/jobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='About Us'
                            title='About Us'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div className='hidden lg:block'>
                    <button className='btn-primary '>Star Applying</button>
                </div>
            </div>
            <div className='flex  justify-center mt-20 text-2xl font-bold'>
                {dynamicPathName}
            </div>
        </div>
    );
};

export default JobDetailsHeader;