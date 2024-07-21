'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SalaryTable from '@/components/SalaryTable';
import { getAllSalary } from '@/lib/actions/salary.actions';
import { FaPlusCircle } from 'react-icons/fa';
const Salary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const salary = await getAllSalary();

      if (salary) {
        setData(salary);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-slate-800 font-semibold text-2xl">Salary</h2>

      <Link
        className="bg-[#395CA0] rounded-md text-white text-base font-semibold py-4 px-2 w-[100px] flex items-center  gap-2"
        href="/dashboard/salary/add"
      >
        <FaPlusCircle className="text-white" />
        Create
      </Link>

      <SalaryTable data={data} />
    </div>
  );
};

export default Salary;
