'use server';

import { revalidatePath } from 'next/cache';
import { db } from '../db';

export const createInvoice = async (data: CraneParams) => {
  try {
    const invoice = await db.invoiceTable.create({
      data: data,
    });

    return invoice;
  } catch (err) {
    console.log('Error while creating a new invoice', err);
  }
};

export const getInVoice = async (id: any) => {
  try {
    const invoice = await db.invoiceTable.findFirst({
      where: {
        id: id,
      },
    });

    revalidatePath('/dashboard');
    return invoice;
  } catch (err) {
    console.log('Error while getting invoice', err);
  }
};
