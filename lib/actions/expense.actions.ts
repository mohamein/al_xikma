'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';

export const createExpense1 = async (data: any) => {
  try {
    const expense = await db.expense1.create({
      data: data,
    });

    revalidatePath('/dashboard/expense');
    return expense;
  } catch (err) {
    console.error('An error occurred while creating a new expense:', err);
  }
};

export const getAllExpenses1 = async () => {
  try {
    const expense = await db.expense1.findMany();

    revalidatePath('/dashboard/expense');

    return expense;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};

// Expenses 2

export const createExpense2 = async (data: any) => {
  try {
    const expense = await db.expense2.create({
      data: data,
    });

    revalidatePath('/dashboard/expense1');
    return expense;
  } catch (err) {
    console.error('An error occurred while creating a new expense 2:', err);
  }
};

export const getAllExpenses2 = async () => {
  try {
    const expense = await db.expense2.findMany();
    revalidatePath('/dashboard/expense1');
    return expense;
  } catch (err) {
    console.log('error well getting expenses 2', err);
  }
};
