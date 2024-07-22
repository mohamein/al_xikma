'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';

export const createExpense = async (data: any) => {
  try {
    const expense = await db.finalTable.create({
      data: data,
    });

    revalidatePath('/dashboard/expense');
    return expense;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};

export const getAllExpenses = async () => {
  try {
    const expense = await db.finalTable.findMany();

    revalidatePath('/dashboard/expense');

    return expense;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};
