'use client';

import React from 'react';
import Logo from '../logo';
import { topMenuItems } from '@/database/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className="flex align-middle">
        {topMenuItems.map((item, index) => (
          <li key={index}>
            {item.pathname === '/signin' ? (
              <Link
                className="bg-red-400 mr-5 p-6 pt-2.5 pb-2.5 rounded-4xl font-bold text-white text-sm"
                href={item.href}
              >
                {item.text}
              </Link>
            ) : (
              <Link
                className={`${
                  item.pathname === pathName
                    ? 'bg-white/15'
                    : 'bg-white/0 hover:bg-white/15'
                } mr-5 p-6 pt-2.5 pb-2.5 rounded-4xl text-white text-sm transition-colors duration-300 ease-linear`}
                href={item.href}
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
