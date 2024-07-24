'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { FaPowerOff } from 'react-icons/fa';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="h-[15vh] bg-white shadow-sm">
      <div className="flex items-center justify-between p-6 gap-2">
        <h2 className="text-base text-slate-700 font-semibold">Admin</h2>

        <div className="flex gap-4 items-center">
          <Link
            className="bg-transparent border border-amber-500 p-2 text-amber-600 text-base font-semibold rounded-md"
            href="/dashboard/invoice"
          >
            Add Invoice
          </Link>
          <button onClick={() => signOut({ callbackUrl: '/auth/sign-in' })}>
            <FaPowerOff size={20} className="text-rose-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
