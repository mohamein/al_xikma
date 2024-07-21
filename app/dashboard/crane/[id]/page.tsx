'use client';
import { useState, useEffect } from 'react';
import CraneTable from '@/components/CraneTable';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { getCrane1, getCrane2 } from '@/lib/actions/crane.actions';

const Crane = ({ params }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (params.id === '1') {
      const fetchData = async () => {
        const crane = await getCrane1();

        setData(crane);
      };

      fetchData();
    } else {
      const fetchData = async () => {
        const crane = await getCrane2();

        setData(crane);
      };

      fetchData();
    }
  }, [params.id]);
  return (
    <div className="space-y-4">
      <h2 className="text-slate-800 font-semibold text-2xl">
        Crane:{params.id}
      </h2>

      <Link
        className="bg-[#395CA0] rounded-md text-white text-base font-semibold py-4 px-2 w-[100px] flex items-center  gap-2"
        href={`/dashboard/crane/${params.id}/add`}
      >
        <FaPlus className="text-white" />
        Create
      </Link>

      <CraneTable data={data} id={params.id} />
    </div>
  );
};

export default Crane;
