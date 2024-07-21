'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';
export const createEmployee = async (data: EmployeeParams) => {
  try {
    const employee = await db.employee.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      },
    });

    revalidatePath('/dashboard/employee');
    return employee;
  } catch (err) {
    console.error('An error occurred while creating a new employee:', err);
  }
};

export const getAllEmployee = async () => {
  try {
    const employees = await db.employee.findMany();
    if (!employees) {
      console.log('No Data Found');
    }

    revalidatePath('/dashboard/employee');
    return employees;
  } catch (err) {
    console.error('An error occurred while getting employees:', err);
  }
};
