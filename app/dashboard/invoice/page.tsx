'use client';
import InvoiceTable from '@/components/InvoiceTable';
import React, { useState, useEffect } from 'react';
import { getAllInvoice } from '@/lib/actions/invoice.actions';
const Invoice = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const invoice: any = await getAllInvoice();
      if (invoice) {
        setData(invoice);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-slate-800">Invoice Page</h2>
      <InvoiceTable data={data} />
    </div>
  );
};

export default Invoice;
