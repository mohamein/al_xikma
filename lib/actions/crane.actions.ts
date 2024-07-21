'use server';

import { db } from '../db';
import { revalidatePath } from 'next/cache';

export const createCrane1 = async (data: CraneParams) => {
  try {
    let crane;

    crane = await db.smallElevator.create({
      data: {
        customer: data.customer,
        description: data.description,
        price: data.price,
        receipt_no: data.receipt_no,
      },
    });
    revalidatePath(`/dashboard/crane/1`);
    return crane;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};
export const createCrane2 = async (data: CraneParams) => {
  try {
    let crane;

    crane = await db.middleElevator.create({
      data: {
        customer: data.customer,
        description: data.description,
        price: data.price,
        receipt_no: data.receipt_no,
      },
    });
    revalidatePath(`/dashboard/crane/2`);
    return crane;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};

export const getCrane1 = async () => {
  try {
    const crane = await db.smallElevator.findMany();

    revalidatePath(`/dashboard/crane/1`);
    return crane;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};
export const getCrane2 = async () => {
  try {
    const crane = await db.middleElevator.findMany();

    revalidatePath(`/dashboard/crane/2`);
    return crane;
  } catch (err) {
    console.error('An error occurred while creating a new crane:', err);
  }
};
