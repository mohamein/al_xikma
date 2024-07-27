import Link from 'next/link';
import Image from 'next/image';

import { FiHome } from 'react-icons/fi';
import { FaUser, FaMoneyBillAlt, FaFileInvoice } from 'react-icons/fa';
import { SiExpensify } from 'react-icons/si';
import { TbCarCrane, TbReport } from 'react-icons/tb';
const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 bg-yellow-300  w-[250px]">
      <div className="flex flex-col gap-8 p-6 h-screen">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="object-contain w-14"
          />
          <h2 className="text-red-700 text-xl font-semibold">Al-xikma</h2>
        </div>

        <ul className="text-red-700 font-semibold flex flex-col space-y-2">
          <span className="text-red-500 text-sm font-medium">Main</span>
          <div className="flex flex-col space-y-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <FiHome size={20} />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/dashboard/employee"
            >
              <FaUser size={20} />
              Employee
            </Link>
            <Link href="/dashboard/salary" className="flex items-center gap-2">
              <FaMoneyBillAlt size={20} />
              Salary
            </Link>
            <Link href="/dashboard/crane/1" className="flex items-center gap-2">
              <TbCarCrane size={23} />
              Crane 25t
            </Link>
            <Link href="/dashboard/crane/2" className="flex items-center gap-2">
              <TbCarCrane size={23} />
              Crane 50t
            </Link>
            <Link href="/dashboard/crane/3" className="flex items-center gap-2">
              <TbCarCrane size={23} />
              Crane 160t
            </Link>
            <Link className="flex items-center gap-2" href="/dashboard/expense">
              <SiExpensify size={20} />
              Expenses 1
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/dashboard/expense1"
            >
              <SiExpensify size={20} />
              Expenses 2
            </Link>
            <Link className="flex items-center gap-2" href="/dashboard/invoice">
              <FaFileInvoice size={20} />
              Invoices
            </Link>
          </div>
        </ul>
        <ul className="text-red-700 font-semibold flex flex-col space-y-3">
          <span className="text-red-500 text-sm font-medium">Other</span>
          <Link className="flex items-center gap-2" href="/dashboard/report">
            <TbReport size={20} />
            Report
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
