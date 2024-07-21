'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';
export const createSalary = async (data: SalaryParams) => {
  try {
    const salary = await db.salary.create({
      data: {
        amount: data.amount,
        horumarin: data.horumarin,
        employee: data.employee,
      },
    });
    revalidatePath('/dashboard/salary');

    return salary;
  } catch (err) {
    console.error('An error occurred while creating a new salary:', err);
  }
};

export const getAllSalary = async () => {
  try {
    const salary = await db.salary.findMany();

    revalidatePath('/dashboard/salary');
    return salary;
  } catch (err) {
    console.error('An error occurred while creating a new salary:', err);
  }
};
