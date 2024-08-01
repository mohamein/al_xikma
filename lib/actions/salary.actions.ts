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

export const updateSalary = async (id: string, data: any) => {
  try {
    const updatedSalary = await db.salary.update({
      where: {
        id: id,
      },
      data: data,
    });
    revalidatePath('/dashboard/salary');
    return updatedSalary;
  } catch (err) {
    console.error('An error occurred while updating a salary:', err);
  }
};

export const deleteSalary = async (id: string) => {
  try {
    const deletedSalary = await db.salary.delete({
      where: {
        id: id,
      },
    });

    revalidatePath('/dashboard/salary');
    return deletedSalary;
  } catch (err) {
    console.error('An error occurred while deleting a salary:', err);
  }
};
