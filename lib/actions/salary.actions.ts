'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';
export const createSalary = async (data: SalaryParams) => {
  try {
    const salary = await db.salary.create({
      data: data,
    });
    revalidatePath('/dashboard/salary');

    return salary;
  } catch (err) {
    console.error('An error occurred while creating a new salary:', err);
  }
};

export const getAllSalary = async () => {
  try {
    const salary = await db.salary.findMany({
      include: {
        employee: true,
      },
    });

    revalidatePath('/dashboard/salary');
    return salary;
  } catch (err) {
    console.error('An error occurred while creating a new salary:', err);
  }
};
