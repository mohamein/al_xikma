import InvoiceForm from '@/components/forms/InvoiceForm';
import React from 'react';

const Invoice = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-slate-800">Invoice Page</h2>
      <InvoiceForm />
    </div>
  );
};

export default Invoice;
