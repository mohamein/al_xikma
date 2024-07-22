'use client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useState, useEffect, useRef } from 'react';
import { getInVoice } from '@/lib/actions/invoice.actions';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa';
interface InvoiceProps {
  id: string;
  customer: string;
  description: string;
  price: number;
  receipt_no: number;
  createdAt: Date;
}
const InvoiceDownload = ({ params }: any) => {
  const [invoice, setInvoice] = useState<InvoiceProps[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchInvoice = async (id: string) => {
      const resp: any = await getInVoice(id);

      setInvoice(resp);
    };

    fetchInvoice(params.id);
  }, [params.id]);

  const formateDate = (date: Date) => {
    const dateOptions: any = {
      year: 'numeric',
      month: 'long', // or 'short' or 'numeric'
      day: 'numeric',
    };

    return date?.toLocaleDateString(dateOptions);
  };

  const handleDownload = async () => {
    const data = contentRef.current;
    if (!data) return;

    const canvas = await html2canvas(data);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
  };
  return (
    <div>
      <Button className="mb-4 text-base" onClick={handleDownload}>
        <FaDownload size={18} className="mr-2" />
        Download
      </Button>

      <div className="bg-white shadow-md p-4 h-[300px] w-[550px]">
        <h2 className="text-xl text-slate-600 font-semibold">Invoice Data</h2>

        <div
          ref={contentRef}
          className="flex  justify-between items-start mt-5"
        >
          <div className="flex flex-col space-y-2 items-start">
            <h3 className="text-slate-600 text-base font-medium capitalize">
              Customer: {invoice?.customer}
            </h3>
            <p className="text-sm text-gray-400 font-normal">
              Description: {invoice?.description}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-semibold text-slate-700">
              Price:${invoice?.price}
            </h3>
            <p className="text-sm text-gray-400 ">
              Receipt No:{invoice?.receipt_no}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-20">
          <p className="text-gray-600 font-light">
            Date:{formateDate(invoice?.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDownload;
