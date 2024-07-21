'use client';
import Crane from '@/components/forms/Crane';
import React from 'react';

interface ParamsProp {
  params: string;
}
const AddCrane = ({ params }: ParamsProp) => {
  const { id } = params;

  return (
    <div className="flex flex-col mx-4">
      <div className="space-y-2">
        <h2 className="text-xl text-slate-700 font-semibold">
          Complete The Form
        </h2>
        <p className="text-gray-400 font-normal capitalize">
          crane form creation.
        </p>
      </div>
      <Crane id={id} />
    </div>
  );
};

export default AddCrane;
