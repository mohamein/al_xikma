'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { FaPowerOff } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="h-[15vh] bg-white shadow-sm">
      <div className="flex items-center justify-end p-6 gap-2">
        <h2 className="text-base text-slate-700 font-semibold">Admin</h2>
        <button onClick={() => signOut({ callbackUrl: '/auth/sign-in' })}>
          <FaPowerOff size={20} className="text-rose-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
